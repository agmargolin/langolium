;(function ($) {
    $(function () {
        /*
        * Метод для минемальной высоты стр.
        * */

        function minHeightPage(header, content, footer) {
            var h_w = $(window).height();
            var h_s_h = $(header).height();
            var h_s_f = $(footer).outerHeight(true);
            if ( $('body').height() < h_w ) {
                if ($(content).next('footer')) {

                    $(content).css('min-height', (h_w - h_s_h) - h_s_f);
                }
            }
        }

        minHeightPage('.header-page-user', '.main-page-user', '.page-footer');
        minHeightPage('.header-page', '.main-page', '.page-footer');

        /* init materializecss modules
        *
        * */

        initMaterialize();

    });
})(jQuery);

/*;(function ($) {
    $(function () {
        var idMapInit = document.getElementById('map');
        var currentCount = 1;
        var $addCityBtn = $('#addCity');
        var $btnRemoveMap = $('.btn-remove-map');
        var dataCity = [
            {
                city: 'Москва',
                lat: 55.7558440,
                long: 37.6168460,
            },
            {
                city: 'Санкт-Петербург',
                lat: 59.9342802,
                long: 30.3350986,
            },
            {
                city: 'Магадан',
                lat: 59.7610150,
                long: 150.3994536,
            },
        ];
        var dataRadius = [
            {
                val: 10,
                text: '+10 км'
            },
            {
                val: 20,
                text: '+20 км'
            },
            {
                val: 30,
                text: '+30 км'
            },
            {
                val: 40,
                text: '+40 км'
            },
            {
                val: 50,
                text: '+50 км'
            }
        ];
        var citymap = {
                region: {
                    center: {lat: dataCity[0].lat, lng: dataCity[0].long},
                    radius: dataRadius[0].val //km
                }
            };
        var forEachDataCity = function (arrayCity, arrayRadius) {
            var mapWrapper = $('<div class="map-wrapper">\n' +
                '                   <div class="spacing size-20"></div>\n' +
                '                   <div class="btn-remove-map"><i class="la la-trash-o"></i></div>\n' +
                '                   <div class="map-field">\n' +
                '                       <div class="map-field-wrapper"></div>\n' +
                '                   </div>' +
                '                   <div class="map-container"></div>\n' +
                '               </div>');

            var selectRegions = $('<select>').attr('id', 'regions' + currentCount).attr('class', 'regions');
            var selectRadius = $('<select>').attr('id', 'radius' + currentCount).attr('class', 'radius');

            mapWrapper.find('.map-field-wrapper').append(selectRegions);
            mapWrapper.find('.map-field-wrapper').append(selectRadius);

            $(arrayCity).each(function (idx, elem) {
                var option = '<option lat="' + elem.lat + '" long="' + elem.long +'">' + elem.city + '</option>';
                mapWrapper.find('#regions' + currentCount).append($(option));
            });

            $(arrayRadius).each(function (idx, elem) {
                var option = '<option value="' + elem.val + '">' + elem.text + '</option>';
                mapWrapper.find('#radius' + currentCount).append($(option));
            });

            mapWrapper.find('.map-container').attr('id', 'map' + currentCount);

            $addCityBtn.before(mapWrapper);

            $('select').formSelect({
                classes: 'left'
            });

            initMap(document.getElementById('map' + currentCount), citymap);

            return currentCount++;
        };

        $addCityBtn.on('click', function (event) {
            event.preventDefault();
            forEachDataCity(dataCity, dataRadius);
        });

        $(document).on('click', '.btn-remove-map', function (event) {
            event.preventDefault();
            if ($(this).parents('.map-wrapper')) {
                $(this).parents('.map-wrapper').remove();
            }
        });

        $(document).on('change', function (event) {
            var newLat = null;
            var newLong = null;
            var newRadius = null;
            var map = undefined;
            var newCityMap = {};

            if ($(event.target).hasClass('regions') || $(event.target).hasClass('radius')) {
                map = $(event.target).parents('.map-field').next('.map-container').attr('id');
            }

            if ($(event.target).hasClass('regions')) {
                newLat = Number($(event.target).find(":selected").attr('lat'));
                newLong = Number($(event.target).find(":selected").attr('long'));
                newRadius = Number($(event.target).parents('.map-field-wrapper').find('.radius').find(':selected').val());
                newCityMap = {
                    region: {
                        center: {lat: newLat, lng: newLong},
                        radius: newRadius //km
                    }
                };

                initMap(document.getElementById(map), newCityMap);
            } else if ($(event.target).hasClass('radius')) {
                var selectRegion = $(event.target).parents('.map-field-wrapper').find('.regions');
                newRadius = Number($(event.target).find(":selected").val());
                newLat = Number(selectRegion.find(":selected").attr('lat'));
                newLong = Number(selectRegion.find(":selected").attr('long'));
                newCityMap = {
                    region: {
                        center: {lat: newLat, lng: newLong},
                        radius: newRadius //km
                    }
                };
                initMap(document.getElementById(map), newCityMap);
            }
        });

        function initMap(id, citymap) {
            // Create the map.
            var idMap = id;
            var cityMap = citymap;

            if(!idMap) return false;

            var map = new google.maps.Map(idMap, {
                zoom: 9,
                center: {lat: cityMap.region.center.lat, lng: cityMap.region.center.lng},
                mapTypeId: 'terrain'
            });

            // Construct the circle for each value in citymap.
            // Note: We scale the area of the circle based on the population.
            for (var city in cityMap) {
                // Add the circle for this city to the map.
                var cityCircle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: cityMap[city].center,
                    radius: cityMap[city].radius * 1000
                });
            }
        }

        initMap(idMapInit, citymap);
    })
})(jQuery);*/

;(function($) {
    $(function () {
        var $nextBtn = $('#next');
        var $oneStep = $('.one-step');
        var $twoStep = $('.two-step');

        $nextBtn.on('click', function (event) {
            event.preventDefault();
            if($('#formEntity').valid()) {
                if ($twoStep.hasClass('hide')) {
                    $twoStep.removeClass('hide');
                    $oneStep.addClass('hide');
                    $('#entityNameHidden').val($('#entityName').val());
                    $('#entitySurnameHidden').val($('#entitySurname').val());
                    $('#entityEmailHidden').val($('#entityEmail').val());
                    $('#entityPhoneHidden').val($('#physicalPersonsTelCodeList').val() + $('#entityTel').val());
                    $('#entityCodeSmsHidden').val($('#entityCodeSms').val());
                    $('#entityPasswordHidden').val($('#entityPassword').val());
                    $('#entityRepeatPasswordHidden').val($('#entityRepeatPassword').val());
                }
            }
        });
        
        $('input[type=checkbox]').on('change', function () {
            if ($('*[id='+ this.value +']').hasClass('hide')) {
                $('*[id='+ this.value +']').removeClass('hide');
            } else {
                $('*[id='+ this.value +']').addClass('hide');
            }
        });
    });
})(jQuery)

;(function($) {
    $(function () {
        $(".display-next").on("click", function() {
            var $this = $(this);
            var $content = $(this).parent().nextAll(".table-row-more:eq(0)");
            var $up = $this.find('.up');
            var $down = $this.find(".down");
            var $la = $this.find("i.la");



            if($content.hasClass("hide")){
                $down.addClass('hide');
                $up.removeClass('hide');
                $content.switchClass("hide", "show", 100);
                $la.switchClass("la-angle-down", "la-angle-up", 0);
            } else {
                $up.addClass('hide');
                $down.removeClass('hide');
                $content.switchClass("show", "hide", 100);
                $la.switchClass("la-angle-up", "la-angle-down", 0);
            };
        });
    });
})(jQuery)

;(function ($) {
    $(function () {
        // jquery validate

        jQuery.validator.addMethod("phoneno", function(phone_number, element) {
            phone_number = phone_number.replace(/\\s+/g, "");
            return this.optional(element) || phone_number.length > 9 && phone_number.match(/^((\+[1-9]{1,4}[\s\-]*)|(\([0-9]{2,3}\)[\s\-]*)|([0-9]{2,4})[\s\-]*)*?[0-9]{2,4}?[\s\-]*[0-9]{2,4}?$/);
        }, "Please specify a valid phone number");

        $.validator.addMethod("regularEmail", function (value, element) {
            if ($(element).val() != '') {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

                return re.test($(element).val());
            }
            return true;
        });

        jQuery.validator.addMethod( 'passwordMatch', function(value, element) {

            // The two password inputs
            var password = $("#physicalPersonsPassword").val();
            var confirmPassword = $("#physicalPersonsRepeatPassword").val();

            // Check for equality with the password inputs
            if (password != confirmPassword ) {
                return false;
            } else {
                return true;
            }

        }, "Пароли не совпадают");

        jQuery.validator.addMethod( 'passwordMatch', function(value, element) {

            // The two password inputs
            var password = $("#entityPassword").val();
            var confirmPassword = $("#entityRepeatPassword").val();

            // Check for equality with the password inputs
            if (password != confirmPassword ) {
                return false;
            } else {
                return true;
            }

        }, "Пароли не совпадают");


        $('#form-register').validate({
            rules: {
                first_name: {
                    required: true,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    minlength: 2
                },
                otp: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true
                },
                email: {
                    email: true,
                    required: true,
                    regularEmail: true
                },
                password: {
                    required: true,
                    minlength: 3
                },
                password_confirm: {
                    required: true,
                    minlength: 3,
                    passwordMatch: true // set this on the field you're trying to match
                }
            }
        });

        $('#autobuyout-edit').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                max_price: {
                    digits: true
                },
                min_price: {
                    digits: true
                },
                lots_per_day: {
                    digits: true
                },
                min_budget: {
                    digits: true
                },
                max_budget: {
                    digits: true
                }
            }
        });

        $('#update-recovery-form').validate({
            rules: {
                password: {
                    required: true,
                    minlength: 8
                },
                password_confirm: {
                    required: true,
                    minlength: 8,
                    passwordMatch: true // set this on the field you're trying to match
                }
            }
        });
        $('#password-form').validate({
            rules: {
                old_password: {
                    required: true,
                    minlength: 8
                },
                password: {
                    required: true,
                    minlength: 8
                },
                password_confirm: {
                    required: true,
                    minlength: 8,
                    passwordMatch: true // set this on the field you're trying to match
                }
            }
        });

        $('#form-login').validate({
            rules: {
                email: {
                    email: true,
                    required: true,
                    regularEmail: true
                },
                password: {
                    required: true,
                    minlength: 8
                }
            }
        });

        $('#form-profile').validate({
            rules: {
                inn: {
                    required: true,
                    minlength: 10,
                    maxlength: 12,
                    digits: true
                }
            }
        });

        $('#payment').validate({
            rules: {
                sum: {
                    required: true,
                    minlength: 1,
                    maxlength: 12,
                    digits: true
                }
            }
        });

        $('#recovery-form').validate({
            rules: {
                passwordRecoveryEmail: {
                    email: true,
                    required: true,
                    regularEmail: true
                }
            }
        });

        $('#formEntity').validate({
            rules: {
                first_name: {
                    required: true,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    minlength: 2
                },
                otp: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true
                },
                email: {
                    email: true,
                    required: true,
                    regularEmail: true
                },
                password: {
                    required: true,
                    minlength: 3
                },
                password_confirm: {
                    required: true,
                    minlength: 3,
                    passwordMatch: true // set this on the field you're trying to match
                }
            }
        });

        $('#formEntity_2').validate({
            rules: {
                inn: {
                    required: true,
                    minlength: 10,
                    maxlength: 12,
                    digits: true
                }
            }
        });
        $('input[type=tel]').inputmask({
            mask: "(999) 999 99 99",
            placeholder: '_',
            clearMaskOnLostFocus: false,
        });

        //start time select
        $("#starttime").on("change", function(){
            $('#from-input').val('');
            $('#to-input').val('');
            $('#until-input').val('');
            switch(this.value) {
                case '1':
                    $('.from-to').removeClass('hide');
                    $('.until').addClass('hide');
                    break;
                case '2':
                    $('.from-to').addClass('hide');
                    $('.until').removeClass('hide');
                    break;
                default:
                    $('.from-to').addClass('hide');
                    $('.until').addClass('hide');
                    break;
            }
        });

        //no budget btn
        $('#no_budget').on('change', function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $('#max_budget').attr('disabled', true);
                $('#min_budget').attr('disabled', true);
                $('#min_budget').val(0);
                $('#max_budget').val(0);
            } else {
                $(this).removeClass('active');
                $('#max_budget').attr('disabled', false);
                $('#min_budget').attr('disabled', false);
            }
        });


        //arbitrage-textarea
        $(".arbitrage-radio").on("click", function(){
            if(this.value == 4) {
                $('.arbitrage-textarea').removeClass('hide');
            } else {
                $('.arbitrage-textarea').addClass('hide');
            }
        });

        //balance-popup
        if(!$.cookie('balance-popup')) {
            $('.balance-popup').fadeIn('1000');
        }

        $(".close_balance_popup").on("click", function(){
            $('.balance-popup').fadeOut('1000');

            var date = new Date();
            var hours = 12;
            date.setTime(date.getTime() + (hours * 1000));
            $.cookie("balance-popup", "1", { expires: date });

        });



        // $('input[name=ppRepeatPassword]').on('change', function (event) {
        //
        //     var valPPP = $('input[name=ppPassword]').val();
        //
        //     if( $(this).val() !== valPPP) {
        //         console.log($(this).val());
        //         $(this).after('<label id="' + $(this).attr('id') + '" class="error" for="' + $(this).attr('id') + '">' + $(this).attr('title') + '</label>');
        //         $(this).addClass('error');
        //     }
        //     console.log('input')
        // });

        // var form = $('form');


        // form.find('input[type=password]').attr('data-')

        // form.each(function (idx, elem) {
        //     var pass = $(this).find('input[type=password]');
        //
        //     console.log(pass);
        //
        //     if ( pass.length > 2 ) {
        //         console.log('pass > 2');
        //     }
        // });

        // console.log(form);




        //profile page
        $( "#submit-form-profile" ).click(function() {
            if($('#form-profile').valid()) {
                $('#form-profile').submit();
            }
        });

        $( "#submit-recovery" ).click(function() {
            if($('#password-form').valid()) {
                $('#password-form').submit();
            }
        });

        $('.add_legal_data_btn').click(function(){
            $('#form-btn-wrap').fadeOut(0);
            $('#form-wrap').fadeIn(500);
        });

        $('.add_legal_data_btn_cancel').click(function(){
            $('#form-btn-wrap').fadeIn(500);
            $('#form-wrap').fadeOut(0);
        });

        //notifications
        $( "#clear_notifications" ).click(function() {

            var form_data = new FormData();
            form_data.append('_token', '{{ csrf_token() }}');
            $.ajax({
                url: 'clearAllUserNotifications',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'get',
                success: function (response) {
                    if (response.success) {
                        alertMessage(response.msg);
                        $('#notifications_count').detach();
                        //$('#notifications_dropdown').html('');
                    } else {
                        alertMessageError(response.error);
                    }
                },
                error: function (request, status, error) {
                    console.log(request);
                    if (request.responseJSON.error) {
                        alertMessageError(request.responseJSON.error_description);
                    }
                }
            });
        });


        //balance
        $( "#update_balance_btn" ).click(function() {
            $("#total_balance").load("/transactions #total_balance span");
            $("#total_balance_inner").load("/transactions #total_balance_inner span");
            $("#bonuses_inner").load("/transactions #bonuses_inner span");
            $("#hold_inner").load("/transactions #hold_inner span");
            $("#sold_inner").load("/transactions #sold_inner span");
            $("#active_bids_inner").load("/transactions #active_bids_inner span");
            $("#payable_balance_inner").load("/transactions #payable_balance_inner span");
            alertMessage('Баланс обновлён');
        });
    });
})(jQuery);


function initMaterialize(){

    $(".dropdown-trigger-blade").dropdown({
        constrainWidth: true,
        hover: false
    });

    $('.tabs-blade').tabs();

    $('.select-blade').formSelect({
        classes: 'left',
        hover: false
    });

    $('.select-full-width-blade').formSelect({
        classes: 'lot-nav-number-select full-width select-full-width',
        hover: false
    });

    $('.modal').modal();

    $('.collapsible').collapsible();

    $('.datepicker-blade').datepicker({
        autoClose: true,
        closeOnSelect: true,
        closeOnClear: true,
        selectMonths: true,
        selectYears: 15,
        minDate: new Date(),
        firstDay: 1,
        i18n: {
            nextMonth: 'Следующий месяц',
            previousMonth: 'Прошлый месяц',
            labelMonthSelect: 'Выберите месяц',
            labelYearSelect: 'Выберите год',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekdaysAbbrev: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
            today: 'Cегодня',
            clear: 'Очистить',
            close: 'Закрыть',
            cancel: 'Отмена',
            done: 'Выбрать',
        },
        format: 'dd.mm.yyyy',
        onOpen: function onOpen() {}
    });

    $( '.tooltipped').tooltip();

    $(document).ready(function(){
        $('.sidenav').sidenav();
    })
}
