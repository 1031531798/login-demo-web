

(function ($) {
    var bootstrapTabs = function (ele, opts) {
        this.defaults = {
            width: undefined,
            height: undefined,
            border: false,
            select: undefined,
            contextmenu: true,
            onLoad: function (title, index) {

            },
            onSelect: function (title, index) {

            },
            onUnselect: function (title, index) {

            },
            onBeforeClose: function (title, index) {

            },
            onClose: function (title, index) {

            },
            onCloseOther: function () {

            },
            onCloseLeft: function () {

            },
            onCloseRight: function () {

            },
            onCloseAll: function () {

            },
            onAdd: function (id, title) {

            },
            onUpdate: function (id, title) {

            },
            onContextMenu: function (e, id, title) {

            }
        };
        this.tabOptions = {
            id: undefined,
            title: undefined,
            close: true,
            content: '',
            url: undefined,
            ajax: false
        };
        this.options = $.extend({}, this.defaults, opts);
        this.$element = ele;
        this.$header = ele.children('.nav-tabs');
        this.$content = ele.children('.tab-content');
        this.notCloseTabs = []; //记录不能关闭的tab
        this.init();
    };
    bootstrapTabs.prototype.init = function () {
        var _this = this;
        this.$header.on('click', '.close-tab', function () {
            var id = $(this).prev("a").attr("aria-controls");
            _this.close(id);
        });
        this.$header.on('mouseover', 'li[role = "presentation"]', function () {
            $(this).find('.close-tab').show();
        });
        this.$header.on('mouseleave', 'li[role = "presentation"]', function () {
            $(this).find('.close-tab').hide();
        });
        if (!this.$element.hasClass('bootstrap-tabs')) { this.$element.addClass('bootstrap-tabs'); }
        this.$element.css({ height: '100%', width: '100%' });
        $(window).resize(function () {
            _this.$element.find('iframe').attr('height', _this.$element.height() - _this.$header.outerHeight(true));
            _this.drop();
        });
        this.initContextMenu();
    };
    bootstrapTabs.prototype.initContextMenu = function () {//初始化右键菜单
        var _this = this;
        if (this.options.contextmenu) {
            //obj上禁用右键菜单
            _this.$element.on('contextmenu', 'li[role=presentation]', function () {
                var id = $(this).children('a').attr('aria-controls');
                _this.pop(id, $(this));
                return false;
            });
            //刷新页面
            _this.$element.on('click', 'ul.rightMenu a[data-right=refresh]', function () {
                var id = $(this).parent('ul').attr("aria-controls").substring(4);
                var url = $(this).parent('ul').attr('aria-url');
                _this.add({ 'id': id, 'url': url });
                $('#popMenu').fadeOut();
                _this.options.onUpdate(id, _this.$header.children('a').text()); //刷新事件回调
            });

            //关闭自身
            _this.$element.on('click', 'ul.rightMenu a[data-right=remove]', function () {
                var id = $(this).parent("ul").attr("aria-controls");
                if (id.substring(0, 4) != 'tab_') return;
                _this.close(id);
                _this.drop();
                $('#popMenu').fadeOut();
            });

            //关闭其他
            _this.$element.on('click', 'ul.rightMenu a[data-right=remove-circle]', function () {
                var tab_id = $(this).parent('ul').attr("aria-controls");
                _this.$header.find('li').each(function () {
                    var id = $(this).children('a').attr('aria-controls');
                    if (tab_id != id) {
                        _this.close(id);
                    }
                });
                _this.drop();
                $('#popMenu').fadeOut();
                _this.options.onCloseOther();
            });

            //关闭左侧
            _this.$element.on('click', 'ul.rightMenu a[data-right=remove-left]', function () {
                var tab_id = $(this).parent('ul').attr("aria-controls");
                $('#tab_' + tab_id).prevUntil().each(function () {
                    _this.close($(this).children('a').attr('aria-controls'));
                });
                _this.drop();
                $('#popMenu').fadeOut();
                _this.options.onCloseLeft();
            });

            //关闭右侧
            _this.$element.on('click', 'ul.rightMenu a[data-right=remove-right]', function () {
                var tab_id = $(this).parent('ul').attr("aria-controls");
                $('#tab_' + tab_id).nextUntil().each(function () {
                    _this.close($(this).children('a').attr('aria-controls'));
                });
                _this.drop();
                $('#popMenu').fadeOut();
                _this.options.onCloseRight();
            });
        }
    };
    bootstrapTabs.prototype.add = function (opts) {//添加tab
        var _this = this;
        var opts = $.extend({}, this.tabOptions, opts);
        var id = 'tab_' + opts.id;
        this.$header.children('li[role = "presentation"].active').removeClass('active');
        this.$content.children('div[role = "tabpanel"].active').removeClass('active');
        var $content = this.$content.children("#" + id);
        //如果TAB不存在，创建一个新的TAB
        if (!$content.length) {
            //创建新TAB的title
            var $title = $('<li>', {
                'role': 'presentation',
                'id': 'tab_' + id,
                'aria-url': opts.url,
                'draggable': true
            }).append(
                $('<a>', {
                    'href': '#' + id,
                    'aria-controls': id,
                    'role': 'tab',
                    'data-toggle': 'tab'
                }).html(opts.title)
            );

            //是否允许关闭
            if (opts.close) {
                $title.append(
                    $('<i>', { 'class': 'close-tab glyphicon glyphicon-remove' })
                );
            } else {
                this.notCloseTabs.push('tab_' + id);
            }
            //创建新TAB的内容
            $content = $('<div>', {
                'class': 'tab-pane',
                'id': id,
                'role': 'tabpanel'
            });

            //加入TABS
            this.$header.append($title);
            this.$content.append($content);
        } else {
            $content = $('#' + id);
            $content.html('');
        }

        //是否指定TAB内容
        if (opts.content) {
            $content.append(opts.content);
        } else if (!opts.ajax) {//没有内容，使用IFRAME打开链接
            var $iframe = $('<iframe>', {
                'class': 'iframeClass',
                // 'scrolling':'no',
                'height': this.$element.height() - this.$header.outerHeight(true),
                'frameborder': "no",
                'border': "0",
                'src': opts.url,
                'allowFullScreen': true
            });
            $content.append($iframe);
            this.showProgressBar($content);
            $iframe.load(function () {//内容加载完成
                _this.hideProgressBar($content);
            });
        } else {
            $.get(opts.url, function (data) {
                $content.append(data);
            });
        }

        //激活TAB
        this.$header.children('#tab_' + id).addClass('active');
        this.$content.children('#' + id).addClass('active');
        this.drop();
        this.options.onAdd(id, opts.title); //添加成功回调
    };
    bootstrapTabs.prototype.showProgressBar = function ($target) {
        var $prgoressBar = $target.children('.tab-progress-bar');
        if ($prgoressBar.length <= 0) {
            $prgoressBar = $('<div class="tab-progress-bar">' +
                                '<div class="progress-bar-shade"></div>' +
                                '<div class="progress-bar-content"><i class="progress-bar-anim"></i>加载中</div>' +
                            '</div>');
            $target.append($prgoressBar);
        }
        var $prgoressBarContent = $target.find('.progress-bar-content');
        $prgoressBar.onResize(function () {
            if ($prgoressBarContent.length > 0) {
                var top = $target.height() / 2 - 31;
                var left = $target.width() / 2 - 90;
                $prgoressBarContent.css({ top: top, left: left });
            }
        });
        var top = $target.height() / 2 - 31;
        var left = $target.width() / 2 - 90;
        $prgoressBarContent.css({ top: top, left: left });
    };
    bootstrapTabs.prototype.hideProgressBar = function ($target) {
        var $prgoressBar = $target.children('.tab-progress-bar');
        if ($prgoressBar.length > 0) {
            $prgoressBar.remove();
        }
    };
    bootstrapTabs.prototype.pop = function (id, e) {
        $('body').find('#popMenu').remove();
        var cannotClose = false; //是否能关闭
        for (var i = 0; i < this.notCloseTabs.length; i++) {
            if (this.notCloseTabs[i] === ('tab_' + id)) {
                cannotClose = true;
                break;
            }
        }
        var $popHtml = $('<ul>', {
            'aria-controls': id,
            'class': 'rightMenu list-group',
            id: 'popMenu',
            'aria-url': e.attr('aria-url')
        }).append(
            '<a href="javascript:void(0);" class="list-group-item" data-right="refresh"><i class="glyphicon glyphicon-refresh"></i> 刷新此标签</a>' +
            (cannotClose === true ? '' : '<a href="javascript:void(0);" class="list-group-item" data-right="remove"><i class="glyphicon glyphicon-remove"></i> 关闭此标签</a>') +
            '<a href="javascript:void(0);" class="list-group-item" data-right="remove-circle"><i class="glyphicon glyphicon-remove-circle"></i> 关闭其他标签</a>' +
            '<a href="javascript:void(0);" class="list-group-item" data-right="remove-left"><i class="glyphicon glyphicon-chevron-left"></i> 关闭左侧标签</a>' +
            '<a href="javascript:void(0);" class="list-group-item" data-right="remove-right"><i class="glyphicon glyphicon-chevron-right"></i> 关闭右侧标签</a>'
        );
        $popHtml.css({
            'top': e[0].offsetHeight - 10 + 'px',
            'left': e[0].offsetLeft + 50 + 'px'
        });
        $popHtml.appendTo(this.$element).fadeIn('slow');
        $popHtml.mouseleave(function () {
            $(this).fadeOut('slow');
        });
    };
    bootstrapTabs.prototype.close = function (id) {
        var $activeTab = this.$header.children('li.active'); //当前打开的tab
        var $closeTab = this.$header.children('#tab_' + id); //要关闭的tab
        var $closeCon = this.$content.children('#' + id); //要关闭的tab内容
        if (this.options.onBeforeClose(id, $closeTab.children('a').text()) == false) {//如果返回false则不关闭tab
            return;
        };
        //是否能关闭
        for (var i = 0; i < this.notCloseTabs.length; i++) {
            if (this.notCloseTabs[i] === 'tab_' + id) {
                return;
            }
        }
        //如果关闭的是当前激活的TAB，激活他的前一个TAB
        if ($activeTab.attr('id') === 'tab_' + id) {
            $closeTab.prev().addClass('active');
            $closeCon.prev().addClass('active');
        }
        //关闭TAB
        $closeTab.remove();
        $closeCon.remove();
        this.drop();
        this.options.onClose(id, $closeTab.children('a').text());
    };
    bootstrapTabs.prototype.closeAll = function () {
        var _this = this;
        $.each(this.$header.children('li[id]'), function () {
            var id = $(this).children('a').attr('aria-controls');
            _this.$header.children("#tab_" + id).remove();
            _this.$content.children("#" + id).remove();
        });
        this.$header.children('li[role = "presentation"]').first().addClass('active');
        var firstID = this.$header.children('li[role = "presentation"]').first().children('a').attr('aria-controls');
        this.$header.find('#' + firstID).addClass('active');
        this.drop();
        this.options.onCloseAll();
    };
    bootstrapTabs.prototype.drop = function () {
        var $header = this.$header;
        //创建下拉标签
        var $dropdown = $('<li>', {
            'class': 'dropdown pull-right hide tabdrop tab-drop'
        }).append(
            $('<a>', {
                'class': 'dropdown-toggle',
                'data-toggle': 'dropdown',
                'href': '#'
            }).append(
                $('<i>', { 'class': "glyphicon glyphicon-align-justify" })
            ).append(
                $('<b>', { 'class': 'caret' })
            )
        ).append(
            $('<ul>', { 'class': "dropdown-menu" })
        );

        //检测是否已增加
        if (!$header.children('.tabdrop').html()) {
            $dropdown.prependTo($header);
        } else {
            $dropdown = $header.find('.tabdrop');
        }
        //检测是否有下拉样式
        if ($header.parent().is('.tabs-below')) {
            $dropdown.addClass('dropup');
        }
        var collection = 0;
        //检查超过一行的标签页
        $header.append($dropdown.find('li'))
            .find('>li')
            .not('.tabdrop')
            .each(function () {
                if (this.offsetTop > 0 || $header.width() - $(this).position().left - $(this).width() < 83) {
                    $dropdown.find('ul').prepend($(this));
                    collection++;
                }
            });

        //如果有超出的，显示下拉标签
        if (collection > 0) {
            $dropdown.removeClass('hide');
            if ($dropdown.find('.active').length == 1) {
                $dropdown.addClass('active');
            } else {
                $dropdown.removeClass('active');
            }
        } else {
            $dropdown.addClass('hide');
        }
    };
    $.fn.bootstrapTabs = function (opts) {
        var arg = arguments;
        var value;
        this.each(function () {
            var ui = $._data($(this)[0], "bootstrapTabs");
            if (!ui) {
                ui = new bootstrapTabs($(this), opts);
                // 缓存插件
                $._data($(this)[0], "bootstrapTabs", ui);
            }
            value = this;
            if (typeof opts === "string") {
                // 执行插件的方法
                value = ui[opts].apply(ui, Array.prototype.slice.call(arg, 1));
            }
        });
        return value;
    };
    $(function () {
        $('.bootstrap-tabs').bootstrapTabs();
    });
})(jQuery);