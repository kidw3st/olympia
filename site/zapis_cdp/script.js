(function(){


function telephone_format( telephone , mask , mask_num){

        if( !telephone || !mask || !mask_num ) 
            return;

        var numbers = [];
        var telephone_array;

        function getNumbers(){

            numbers = [];

            telephone_array = telephone.value.split('');

            for( var i = 0, j = 0; i < mask.length; i++ ){
                if( mask[i] == mask_num ) {
                    while(j < telephone_array.length){
                        telephone_array_j = telephone_array?.[j].match(/\d+/) ? telephone_array[j] : undefined;
                        j++;
                        if( telephone_array_j ){
                            numbers.push( telephone_array_j );
                            break;
                        }
                    }
                    
                }
            }

        }

        function render (){

            var pre_value = '';
            
            for( var i = 0, n = 0; i < mask.length; i++ )
                if( mask[i] == mask_num ) 
                    ( pre_value += numbers[n] || mask_num ) , n++ ;
                else
                    pre_value += mask[i];

            telephone.value = pre_value
            
        }

        getNumbers();
        render();

        telephone.addEventListener('input', handler);
        telephone.addEventListener('click', handler);
        telephone.addEventListener('keydown', handler);
        telephone.addEventListener('focus', function(e){ e.preventDefault(); return false; });
        telephone.addEventListener('paste', handler);

        function handler(e){  
            //e.preventDefault()

            var key = e.data?.match(/^\d+$/) && e.data;
            var inputType = e.inputType;
            
            if( (e.type === 'paste' || e.type === 'input') && !key && !inputType ) {
                if( e.type === 'paste' )
                    telephone.value = e.clipboardData.getData('text/plain');
                getNumbers();
                render();
                e.preventDefault();
                return;
            }

            var start_mask = telephone.selectionStart;
            var end_mask = telephone.selectionEnd;

            ( e.keyCode === 39 ) && ( start_mask++, end_mask++ );
            ( e.keyCode === 37 ) && ( start_mask--, end_mask-- );

            ( inputType === 'insertText' && end_mask === start_mask && (start_mask = --end_mask) );

            var start_num , end_num;

            for( var m = 0, n = 0; m < mask.length ; m++ ){
                if( mask[m] != mask_num ){
                    if( m === start_mask && ( inputType === 'deleteContentBackward' || e.keyCode === 37 ) ){
                        start_num = n > 0 ? n-1 : 0;
                    }
                    continue;
                } 
                ( start_num === undefined && m >= start_mask && ( start_num = n ) );
                ( end_num === undefined && m >= end_mask && ( end_num = n) );
                n++;
            }

            ( end_num === undefined && ( end_num = n ) );
            ( start_num === undefined && ( start_num = n ) );

            ( start_num != end_num && end_num-- );
            
            if( e.type === 'input' ){
                var array_undefined_length = end_num - start_num + 1;
                
                [].splice.apply( numbers , [ start_num , end_num - start_num + 1 || 1 , ].concat( Array( array_undefined_length ).fill(undefined) ) );

                ( key && start_num !== undefined && (numbers[start_num] = key) );
                
                render();
            }

            for( var selection_pos = 0, j = 0 , next_num = ( e.type !== 'input' || inputType === 'deleteContentBackward' || ( !key && inputType === 'insertText' ) || ( !key && start_num != end_num ) ? start_num : start_num + 1); selection_pos < mask.length ; selection_pos++ ){
                if( mask[selection_pos] != mask_num ) continue;
                if( j === next_num ) break;
                j++;
            }

            setSelection( telephone, selection_pos, selection_pos)
            
        }

        function setSelection(input, selectionStart, selectionEnd, binded) {
            input.selectionEnd = selectionStart;
            input.selectionStart = selectionEnd;

            if( !binded )
                setTimeout( setSelection.bind(null, input, selectionStart, selectionEnd, true), 0 )
        }

    }
    
	function initForm(){

        var sendedForm = false;

        async function sendForm(e){

            e.preventDefault();

            if( sendedForm )
                return false;
            
            sendedForm = true;

            var data = new FormData(this);

            console.log( 'отправляю');
/*
            var data_iterator = data.entries();
            var el;
            while( (el = data_iterator.next()).value )
                console.log( el );
*/

            //return false;

            $.ajax({
                url: location.pathname + '/ajax.php',
                method: 'POST',
                dataType: 'JSON',
                processData: false,
                contentType: false,
                data,
                success(response){
                    console.log(response)

                    if( response.RESULT_ID ){
                        $(`
                            <div class="message_sent_BG"></div>
                            <div class="message_sent form_zapis_cdk"> 
                                <h4>Ваша заявка № ${response.RESULT_ID} в обработке!</h4>
                                <p>
                                    Спасибо.
                                </p>
                                <p>
                                    Мы получили Вашу заявку. Мы перезвоним Вам в течение одного рабочего дня и подберём подходящую именно Вашему ребёнку группу.
                                </p>
                                <p>
                                    Важно! Звонок будет с номера Олимпии <a href="tel:83422144692">(342) 214-46-92</a>. <br>
                                    Убедитесь, что этот номер не заблокирован у Вас на телефоне.<br>
                                </p>
                                <p>
                                    НАУЧИТЕ РЕБЁНКА ПЛАВАТЬ!
                                </p>
                                <input id="sent_message" class="send_order_form simple_red_btn" type="button" value="Закрыть" />
                            </div>`).appendTo('body');

                            //zapis_cdp_submit && zapis_cdp_submit.parentNode.removeChild(zapis_cdp_submit);
                            //window.recaptcha_asq_quetion && window.recaptcha_asq_quetion.parentNode.removeChild(window.recaptcha_asq_quetion);

                            grecaptcha.reset(rwidget2);

                            for( let field of zapis_cdp.querySelectorAll('input, select, textarea, select') ){

                                if( field.name === 'form_dropdown_NAVIK' )
                                    continue;

                                if( field.type === 'text' || field.tagName === 'TEXTAREA' )
                                    field.value = '';
                                else if( field.type === 'checkbox' )
                                    field.checked = false;
                                else if( field.tagName === 'SELECT' ){
                                    field.selectedIndex = 0;
                                    field.value = field.options[0].value;
                                }

                                field.dispatchEvent( new Event('input') );
                                field.dispatchEvent( new Event('change') );
                            }

                    }else if( response.FORM_ERRORS ){
                        if( false && /FK1/.exec(response.FORM_ERRORS) ){
                            alert('Подвердите, что Вы человек')
                        }else{

                            $(`
                                <div class="message_sent_BG"></div>
                                <div class="message_sent"> 
                                    <h4>Ошибка!</h4>
                                    <p>
                                        `+
                                        ( /FK1/.exec(response.FORM_ERRORS) ? 'Подвердите, что Вы человек' : response.FORM_ERRORS/*.replace('<br />', '\n')*/ )
                                        +`
                                    </p>
                                    <input id="sent_message" class="send_order_form simple_red_btn" type="button" value="Закрыть" />
                                </div>`).appendTo('body');
                        }
                    }else{
                        alert("Ошибка в отправке сообщения");
                    }

                    sendedForm = false;
                },
                error(response){
                    console.log(response)
                    alert("Ошибка в отправке сообщения");
                    sendedForm = false;
                }
            });
            
            return false;
        }

		let zapis_cdp = document.forms['zapis_cdp'];
		let zapis_cdp_submit = zapis_cdp.querySelector('input[type="submit"]');
        
		if( !zapis_cdp )
            return;

        {

            var fields = [].slice.call( zapis_cdp.querySelectorAll('.d_f') ).concat( [].slice.call( zapis_cdp.querySelectorAll('.chkbox_') ) );
            var optionsObserve = { subtree: true, attributes: true };

            let reqField = function reqField( o ){
                o.mut.disconnect();

                if( o.field.querySelector('input[required]') || o.field.querySelector('textarea[required]') )
                    o.field.classList.add('required');
                else
                    o.field.classList.remove('required');

                o.mut.observe( o.field, optionsObserve );
            }

            for( let field of fields ){

                let o = {
                    field
                };

                o.mut = new MutationObserver( reqField.bind( null, o ) );

                reqField(o);

            }

        }


        {
			zapis_cdp.classList.add('question_form');
			zapis_cdp_submit && (
				zapis_cdp_submit.classList.add('send_question_form'),
				zapis_cdp_submit.classList.add('simple_red_btn')
			);

			zapis_cdp.addEventListener( 'submit', sendForm.bind( zapis_cdp ) );


            let files = zapis_cdp.querySelector('.d_f.file_right');

            if( files ){
                let children = [].slice.call( files.children );
                let new_child = undefined;
                for( let child of children ){
                    child.parentNode.removeChild( child );
                    if( child.tagName === 'BR' )
                        continue;

                    if( !new_child )
                        ( new_child = document.createElement('DIV') ), new_child.classList.add('file_field');

                    new_child.appendChild(child);

                    if( child.classList.contains('bx-input-file-desc') )
                        files.appendChild(new_child), ( new_child = undefined );

                }
            }

            let inn = zapis_cdp.form_text_65;
            let file_instead_inn = zapis_cdp.form_file_87;

            if( inn && file_instead_inn ){

                let innInput = function(){
                    if( inn.value ){
                        file_instead_inn.removeAttribute('required');
                    }else if( file_instead_inn?.files.length ){
                        inn.removeAttribute('required');
                    }else{
                        file_instead_inn.setAttribute('required', 'required');
                        inn.setAttribute('required', 'required');
                    }

                };

                inn.addEventListener('input', innInput );
                file_instead_inn.addEventListener('input', innInput );
                innInput();
            }
		}

		{

            let form_dropdown_STEPEN = zapis_cdp.form_dropdown_STEPEN;
            if( form_dropdown_STEPEN ){

                let fields = [
                    [ 
                        'form_text_63',
                        'form_text_68'
                    ],
                    [
                        'form_date_64',
                        'form_date_69'
                    ]
                ];

                let inputValues = function(field, e){
                    field.value = this.value;
                }

                let fieldsDisabled = function(disable){
                    for( let field of fields ){
                        let field_1 = zapis_cdp[field[1]];
                        field_1[ disable ? 'setAttribute' : 'removeAttribute' ]('readonly', '');
                        
                        if( !disable && lastValue == '70' && form_dropdown_STEPEN.value != '70' ){
                            field_1.value = '';
                        }
                    }


                    lastValue = form_dropdown_STEPEN.value;
                }

                let setRemoveHandlers = function(remove){

                    for( let field of fields ){
                        let field_0 = zapis_cdp[field[0]];
                        let field_1 = zapis_cdp[field[1]];

                        if( !field_0 || !field_1 )
                            continue;

                        let handler_ = field[2];
                        
                        if( remove )
                            ( handler_ && field_0.removeEventListener( 'input', handler_, {capture: true} ) );
                        else
                            handler_ = handler_ || inputValues.bind( field_0, field_1 ),
                            !field[2] && field.push( handler_),
                            field_0.addEventListener( 'input', handler_, {capture: true} ),
                            field_0.dispatchEvent( new Event('input') );

                    }

                    fieldsDisabled( !remove )
                }
                
                let inited = false;
                let lastValue = undefined;

                let handlerStepen = function(e){
                    
                    if( !inited )   
                        for( let field of fields ){
                            let field_0 = zapis_cdp[field[0]];
                            
                            if( !field_0 )
                                continue;
    
                            let desc = Object.getOwnPropertyDescriptor( field_0, 'value' );
                
                            if( !desc )
                                return setTimeout( handlerStepen, 50 ), false;

                            let set_ = desc.set;
                            let eventAccess = true;
                            desc.set = function(v){ 
                                set_.call(this, v);
                                eventAccess && ( 
                                    eventAccess = false,
                                    field_0.dispatchEvent( new Event('input') )
                                );
                                
                                eventAccess = true;

                            }
                            Object.defineProperty( field_0, 'value', desc );
                        }
                    
                    inited = true;

                    setRemoveHandlers( form_dropdown_STEPEN.value != '70' );
                }

                $(form_dropdown_STEPEN).on( 'change', handlerStepen );
                document.addEventListener( 'handlerStepen', handlerStepen );

               /// handlerStepen();
            }

        }



        {

            let innformat = function( field ){

                function innEvent(e){
    
                    var service_keys = e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 40 || e.ctrlKey;
    
                    if( !service_keys && (!e.key.match(/^\d+$/) || field.value.length >= 12 ) ){ 
                        e.preventDefault();
                    }
    
                }
    
                field.addEventListener( 'keydown', innEvent );
    
            }

            if( zapis_cdp.form_text_65 ){
                innformat( zapis_cdp.form_text_65 );
            }

            if( zapis_cdp.form_text_91 ){
                innformat( zapis_cdp.form_text_91 );
/*
                let inn_person = function (){
                    var show = !zapis_cdp.form_text_91.value.match(/^\d{12}$/) || zapis_cdp.form_text_91.value.length !== 12;

                    zapis_cdp.form_text_98.classList[show ? 'add' : 'remove' ]('required')
                    zapis_cdp.form_dropdown_POLE_PERSON_DOC.classList[show ? 'add' : 'remove' ]('required')

                }

                inn_person();
                zapis_cdp.form_text_91.addEventListener('input', inn_person);
*/
            }
            
        }
/*
        {
            if( zapis_cdp.form_text_91 && zapis_cdp.form_text_98 ){

                let handler = function (e){
                    zapis_cdp.form_text_98[ zapis_cdp.form_text_91.value.trim().length ? 'removeAttribute' : 'setAttribute' ]('required', 'required');
                    zapis_cdp.form_text_91[ zapis_cdp.form_text_98.value.trim().length ? 'removeAttribute' : 'setAttribute' ]('required', 'required');
                };

                zapis_cdp.form_text_91.addEventListener('input', handler)
                zapis_cdp.form_text_98.addEventListener('input', handler)

                handler();
            }
        }
*/


        $(document).ready(function(){
            var inputs = document.querySelectorAll('.selectric-input');

            for( let input of inputs ){
                input.setAttribute('autocomplete', 'new-password');
            }

        });

        if( zapis_cdp.form_dropdown_POLE ){

            (function init(){

                if( !zapis_cdp.form_dropdown_NAVIK )
                    return;

                var select_NAVIK = [].slice.call( zapis_cdp.form_dropdown_NAVIK.options );

                var selectric = zapis_cdp.form_dropdown_NAVIK.labels[0].querySelector('.selectric');
                var selectric_ul = zapis_cdp.form_dropdown_NAVIK.labels[0].querySelector('.selectric-items ul');
                var list_selectric = [].slice.call( selectric_ul?.querySelectorAll('li') || [] );

                if( !list_selectric.length )
                    return setTimeout( init, 50 );

                var arr = {126: [128,129,130], 127: [131,132,150, 151]}

                function labelObserver (){
                    observe.disconnect();
                    for( let item of select_NAVIK ){
                        if( !item.selected || zapis_cdp.form_dropdown_NAVIK.value != item.value ) continue;

                        setTimeout( function(){ selectric.querySelector('.label').innerHTML = item.innerHTML } , 0 );
                        
                        return;
                    }

                    observe.observe(selectric, {subtree: true, attributes: true})

                }

                var observe = new MutationObserver(labelObserver);
                observe.observe(selectric, {subtree: true, attributes: true})
                


                function handlerType (){

                    if( !zapis_cdp.form_dropdown_NAVIK || !list_selectric.length )
                        return;

                    function event(e){ 

                        var value_pole = parseInt(zapis_cdp.form_dropdown_POLE.value);

                        for( let i = 0, d_i = 0; i < select_NAVIK.length; i++ ){
                            let option = select_NAVIK[i];
                            
                            option.selected = false;
                            option.style.display = 'none';
                            option.parentNode?.removeChild( option );
                            list_selectric[i].parentNode && list_selectric[i].parentNode.removeChild(list_selectric[i]);
                            list_selectric[i].removeAttribute('data-index');


                            if( arr[value_pole].indexOf(parseInt(option.value) ) === -1 ) continue;

                            option.style.display = '';
                            zapis_cdp.form_dropdown_NAVIK.appendChild( option );
                            selectric_ul.appendChild(list_selectric[i]);
                            list_selectric[i].setAttribute('data-index', d_i++);
                        }



                        selectric_ul.querySelector('li')?.dispatchEvent( new Event('click') );
                        labelObserver();
                    }

                    $(zapis_cdp.form_dropdown_POLE).on('change', event);
                    $(zapis_cdp.form_dropdown_NAVIK).on('change', labelObserver);

                    event();
        
                }


                setTimeout( handlerType, 50 );


            })();


        }


        function setHandlerSelectric(){

            let wrappers = document.querySelectorAll('.selectric-wrapper');
            let handler = function (list){
                for( let li of list ){
                    if( parseInt(li.getAttribute('data-index')) === this.selectedIndex )
                        li.dispatchEvent( new Event('click') )
                }
            }

            for( let wrapper of wrappers ){
                let select = wrapper.querySelector('.selectric-hide-select select');
                let list = wrapper.querySelectorAll('.selectric-items ul li');
                select.addEventListener('change', handler.bind(select, list ));
            }

        }

        setTimeout( setHandlerSelectric, 0 );


        if( zapis_cdp.form_dropdown_WAS_BEFORE ){

            function handlerType (){

                if( !zapis_cdp.form_dropdown_WAS_BEFORE )
                    return;

                var arr = {138: [147], 139: []}
                var list = zapis_cdp.form_dropdown_WAS_BEFORE.labels[0].querySelectorAll('.selectric-items ul li');

                if( !list.length )
                    return setTimeout( handlerType, 50 ), false;

                let event = function(e){ 

                    var value = parseInt(zapis_cdp.form_dropdown_WAS_BEFORE.value);

                    for( let key in arr ){

                        for( let id of arr[key] ){
                            let visible = value === parseInt(key);
                            let field = zapis_cdp.querySelector('[name$="_'+id+'"]')
                            field && $(field).closest('.d_f').length && (
                                $(field).closest('.d_f')[0].style.display = visible  ? '' : 'none',
                                field[ visible ? 'setAttribute' : 'removeAttribute']('required','required'),
                                field.disabled = visible ? null : 'disabled'
                            )
                        }

                    }

                }



                $(zapis_cdp.form_dropdown_WAS_BEFORE).on('change', event);

                event();
    
            }

            document.addEventListener('handlerType', handlerType);

        }

        zapis_cdp.form_text_123 &&  
        telephone_format( zapis_cdp.form_text_123, '+7 (___) ___-__-__', '_' );

	};

    function convertDateField(){

        BX.message({'FORMAT_DATE': 'DD.MM.YYYY'})


        var checkDate = {
            checkDate(value){
                var regExp = /\d{2}\.\d{2}\.\d{4}/;
        
                return regExp.exec( value );
            },
            checkInput(e){
                
                var value = e.target.value;

                if( !checkDate.checkDate(value) )
                    e.target.value = '';

                ///e.target.dispatchEvent( new Event('input') );
            }
        }

        var dates = document.querySelectorAll('input[name^="form_date_"]');
        for( let date of dates ){
            if( !date.id )
                continue;

            let calendar = document.querySelector('[onclick*="field:\''+ date.id +'\'"]');

            if( !calendar?.onclick )
                continue;

            calendar.parentNode.removeChild(calendar);

            let binded = calendar.onclick.bind(date);
            let preFunc = function (){
                if( this.hasAttribute('readonly') )
                    return;

                binded();
            }

            date.addEventListener('click', preFunc );
            date.addEventListener('input', checkDate.checkInput );
        }
    }



    document.addEventListener('DOMContentLoaded', initForm);
    document.addEventListener('DOMContentLoaded', convertDateField);


	document.addEventListener('DOMContentLoaded', function(){
		document.dispatchEvent( new Event('handlerStepen') );
		document.dispatchEvent( new Event('handlerType') );
	});
})();





