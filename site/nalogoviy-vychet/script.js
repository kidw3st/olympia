(function(){

    var x10_multiple_files = [];

    function setInputFile(){

        var svg = {
            file: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M114,498a4,4,0,0,0-4,4v8H82a4,4,0,0,1-4-4V454a4,4,0,0,1,4-4h36a4,4,0,0,1,4,4v44h-8Zm0,12v-8h8ZM90,466h20a2,2,0,0,1,0,4H90A2,2,0,1,1,90,466Zm0,10h20a2,2,0,0,1,0,4H90A2,2,0,1,1,90,476Zm0,10h20a2,2,0,0,1,0,4H90A2,2,0,1,1,90,486Z" id="document" transform="translate(-78 -450)" fill="%230965b8" fill-rule="evenodd" /></svg>`,
            add: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path fill="%23699f4c" fill-rule="evenodd" d="M1080,270a30,30,0,1,1,30-30A30,30,0,0,1,1080,270Zm14-34h-10V226a4,4,0,0,0-8,0v10h-10a4,4,0,0,0,0,8h10v10a4,4,0,0,0,8,0V244h10A4,4,0,0,0,1094,236Z" id="add" transform="translate(-1050 -210)"/></svg>`,
            remove: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path fill="%239f4c4c" fill-rule="evenodd" d="M940,510a30,30,0,1,1,30-30A30,30,0,0,1,940,510Zm15-20.047A3.408,3.408,0,0,1,955,494.77l-0.221.22a3.42,3.42,0,0,1-4.833,0l-8.764-8.755a1.71,1.71,0,0,0-2.417,0l-8.741,8.747a3.419,3.419,0,0,1-4.836,0l-0.194-.193a3.408,3.408,0,0,1,.017-4.842l8.834-8.735a1.7,1.7,0,0,0,0-2.43l-8.831-8.725a3.409,3.409,0,0,1-.018-4.844l0.193-.193a3.413,3.413,0,0,1,2.418-1c0.944,0,3.255,1.835,3.872,2.455l7.286,7.287a1.708,1.708,0,0,0,2.417,0l8.764-8.748a3.419,3.419,0,0,1,4.832,0L955,465.243a3.408,3.408,0,0,1,0,4.818l-8.727,8.737a1.7,1.7,0,0,0,0,2.407Z" id="uncheck" transform="translate(-910 -450)"/></svg>`,
        };

        var style = document.createElement("style");

        /////url("data:image/svg+xml; utf8, <svg.. code here</svg>")
        style.innerHTML = `

            .containerFile .label_file{
                position: relative;
            }
            
            .containerFile .label_file .remove_file::before{
                content:url('data:image/svg+xml; utf8, `+ svg.remove +`');
                top: 1px;
                right: 1px;
            }

            .containerFile .label_file:not(.added):after, .containerFile .label_file.focus_file:after{
                content:url('data:image/svg+xml; utf8, `+ svg.add +`');
                bottom: 1px;
                right: 1px;
            }

            .containerFile .label_file:before{
                content:url('data:image/svg+xml; utf8, `+ svg.file +`');
                width: 100%;
                height: 100%;
            }

            .containerFile .label_file:not(.added):after, .containerFile .label_file.focus_file:after, .label_file .remove_file::before{
                width: 20px;
                height: 20px;
                display: block;
                position: absolute;
                background: #fff;
                padding: 3px;
                border-radius: 50%;
                opacity: .8;
            }

            .containerFile .label_file.focus_file .remove_file::before{
                display: none;
            }

            .containerFile .label_file:not(.added):hover:after, .containerFile .label_file.focus_file:after, .containerFile .label_file .remove_file:hover::before{
                opacity: 1;
            }

        `;

        document.head.appendChild(style);

        var inputFiles = document.querySelectorAll('input[type="file"]');

        function dropRemoveFile( e ){
            var files = e?.dataTransfer?.files || e?.target?.files;

            if( e.type === 'input' && !files?.length )
                return;
            
            this.files = files;
            e.preventDefault();
        }

        function mouseoverFile( e ){console.log( arguments )
            var over = e.type === 'dragover';
            e.preventDefault();

            if( over && !e?.dataTransfer?.files )
                return;

            this !== window && this.classList[ over ? 'add' : 'remove']('focus_file');
        }


        for( let inputFile of inputFiles ){

            if( inputFile.getAttribute('data-file-ids') && inputFile.getAttribute('data-file-name') ){

                let setFiles = function(file, e){
                    
                    if( e?.dataTransfer?.files ){
                        e.preventDefault();
                        file.append_files(e.dataTransfer.files);
                        return;
                    }

                    file.append_files(this.files);
                    //this.value = '';

                }


                let maxSummFilesH = 20;////Мбайт
                let maxSummFiles = maxSummFilesH*1024*1024;////Мбайт
                let typesRX = /pdf|jpg|jpeg|bmp|png|gif/;

                let summFiles = function(){
                    var summ = 0;
                    
                    for( let f of files ){
                        summ += f.size;
                    }

                    return summ;
                }

                let formatSize = function(size, measure){
                    return Intl.NumberFormat('en-EN').format( size / 1024 / 1024 ) + ( measure ? ' Мбайт' : '' );
                }

                let files = [];
                let filesText = [];
                ///let urls = [];
/*
                files_w = files;
                filesText_w = filesText;
*/
                let file_obj = {
                    inputFile,
                    async comparise(file){

                        var fileText = await file.text();

                        for( fText of filesText ){
                            if( fText === fileText )
                                return true;
                        }

                        return fileText;

                    },
                    async append_files(v){
                        if( !(v instanceof FileList) )
                            return;

                        let alertMb = false;
                        let alertType = false;

                        for( let f of v ){
                            if( ( files.length >= file_obj.ids.length && !alert('Возможно добавить не более '+ file_obj.ids.length +' файлов') ) )
                                break
                            
                            if( (!typesRX.exec( f.type ) && ( alertType = true )) || (summFiles() + f.size >= maxSummFiles) && (alertMb = true) )
                                continue;

                            let fileText = await file_obj.comparise(f);

                            if( fileText === true )
                                continue;

                            files.push( f );
                            filesText.push( fileText );
                        }

                        if( alertMb || alertType )
                            alert( ( alertMb ? 'Превышен лимит '+ maxSummFilesH +' Мбайт по размеру файлов!\nНекоторые файлы не были добавлены!\n' : '') + ( alertType ? 'Некоторые файлы не допустимого формата' : '') );

                        file_obj.render();
                    },
                    get files(){
                        return files;
                    },
                    remove_file(){
                        for( let i = 0; i < files.length; i++){
                            let f = files[i];
                            if( f !== this ) continue;
                            
                            files.splice(i,1);
                            filesText.splice(i,1);
                            file_obj.render();
                            break;
                        }

                        if( !files.length )
                            inputFile.value = '';
                    },
                    async render(){
                        file_obj.container_files.innerHTML = '';
                        /*for(let url of urls){
                            URL.revokeObjectURL(url);
                        }

                        urls.splice(0);*/

                        for( let file of files ){
                            let row_file = document.createElement('div');
                            row_file.className = 'row_file';

                            let containerFile = document.createElement('div');
                                containerFile.classList.add('containerFile');

                            let span_file = document.createElement('span');
                            span_file.className = 'label_file';

                            containerFile.appendChild(span_file);

                            let remove = document.createElement('DIV');
                            remove.className = 'remove_file';
                            remove.title = 'Удалить файл';

                            span_file.appendChild(remove);

                            row_file.appendChild(containerFile);

                            let file_desc = document.createElement('div');
                            file_desc.classList.add('file_desc');
                            
                            /*let blob = new Blob( [await file.arrayBuffer()] );

                            let url = URL.createObjectURL(blob);
                            urls.push(url);*/
                            
                            file_desc.innerHTML = `<div class="file_name">${file.name}</div><div class="file_size">${formatSize( file.size, true )}</div>`;
                            row_file.appendChild(file_desc);

                            file_obj.container_files.appendChild(row_file);

                            remove.addEventListener('click', file_obj.remove_file.bind( file ) );
                        }

                        file_obj.renderTitle();
                        
                    },
                    renderTitle(){
                        containerFileFieldDesc && 
                        (containerFileFieldDesc.innerHTML = `${files.length} / ${file_obj.ids.length} вложений<br> ${formatSize( summFiles() )} из ${maxSummFilesH} Мбайт`);
                    },
                    ids: inputFile.getAttribute('data-file-ids').split(/\s*,\s*/),
                    container_files: document.createElement('DIV'),
                    field_name: inputFile.getAttribute('data-file-name')
                };

                x10_multiple_files.push( file_obj );

                let containerFileField = document.createElement('div');
                containerFileField.classList.add('containerFileField');

                let containerFile = document.createElement('div');
                containerFile.classList.add('containerFile');
                

                inputFile.parentNode.insertBefore( containerFileField, inputFile );
                containerFile.appendChild( inputFile );
                containerFileField.appendChild(containerFile);

                let containerFileFieldDesc = document.createElement('div');
                containerFileFieldDesc.classList.add('containerFileFieldDesc');
                file_obj.renderTitle();

                containerFileField.appendChild(containerFileFieldDesc);

                let label = document.createElement('LABEL');
                label.className = 'label_file';

                inputFile.parentNode.insertBefore( label, inputFile );
                label.appendChild( inputFile );
                
                file_obj.container_files.classList.add('container_files');

                file_obj.inputFile.setAttribute('multiple', '');

                containerFileField.parentNode.appendChild( file_obj.container_files );

                label.addEventListener( 'dragover', mouseoverFile );
                label.addEventListener( 'dragleave', mouseoverFile );
                file_obj.container_files.addEventListener( 'dragover', mouseoverFile );
                file_obj.container_files.addEventListener( 'dragleave', mouseoverFile );


                label.addEventListener( 'drop', setFiles.bind(inputFile, file_obj) );
                file_obj.container_files.addEventListener( 'drop', setFiles.bind(inputFile, file_obj) );
                inputFile.addEventListener( 'input', setFiles.bind(inputFile, file_obj) );

            }else{

                let containerFile = document.createElement('div');
                containerFile.classList.add('containerFile');

                inputFile.parentNode.insertBefore(containerFile, inputFile );

                containerFile.appendChild(inputFile);
                
                let label = document.createElement('LABEL');
                label.className = 'label_file';

                let inputReceiverFile = document.createElement('INPUT');
                inputReceiverFile.type = 'file';

                Object.defineProperty(label, 'files', {
                    set(files){

                        if( (files instanceof FileList) && files.length ){
                            name_file.innerText = containerFile.title = files[0].name;
                            label.classList.add('added');
                            inputFile.files !== files && (
                                (inputFile.files = files),
                                inputFile.dispatchEvent( new Event('input') )
                            );
                            label.appendChild(remove);
                        }else{
                            name_file.innerText = containerFile.title = '';
                            label.classList.remove('added');
                            inputFile.value = '';
                            remove.parentNode && remove.parentNode.removeChild(remove);
                            inputFile.dispatchEvent( new Event('input') );
                        }

                        label.classList.remove('focus_file');
                        
                    },
                    configurable: false
                });

                let name_file = document.createElement('div');
                name_file.className = 'name_file';
                let remove = document.createElement('DIV');
                remove.className = 'remove_file';
                
                label.addEventListener( 'dragover', mouseoverFile.bind(label) );
                label.addEventListener( 'dragleave', mouseoverFile.bind(label) );

                label.addEventListener( 'drop', dropRemoveFile.bind(label) );
                remove.addEventListener( 'click', dropRemoveFile.bind(label) );
                inputReceiverFile.addEventListener( 'input', dropRemoveFile.bind(label) );

                label.appendChild(inputReceiverFile);
                containerFile.appendChild(label);
                containerFile.appendChild(name_file);

            }
            
        }

    }


    function convertDateField(){

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

    function formatPeriod(){
        var input = document.querySelector('input[name="form_text_60"]');
        
        if( !input )
            return;


        function checkPreriod(){

            if( input.value.length < 4 )
                return;

            var bigger = input.value > 1970; 
            var lesser = input.value < 2100; 
            if( bigger && lesser )
                return true;

            if( !lesser ){
                input.value = 2100
            }else{
                input.value = 1970
            }
        }

        input.addEventListener('input', checkPreriod);
    };


    
	function initForm(){

        var sendedForm = false;

        async function sendForm(e){

            e.preventDefault();

            if( sendedForm )
                return false;
            
            sendedForm = true;

            var data = new FormData(this);

            main: for( let field of x10_multiple_files ){
                
                let file_iterator = field.files.entries();
                
                for( let id of field.ids ){
                    let file = file_iterator.next().value?.[1];
                    if( !file )
                        break main;
                    data.set('form_file_'+id, file || '' );
                }

            }


            console.log( 'отправляю');

            var data_iterator = data.entries();
            var el;
            while( (el = data_iterator.next()).value )
                console.log( el );


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
                            <div class="message_sent"> 
                                <h4>Ваша заявка № ${response.RESULT_ID} в обработке!</h4>
                                <p>
                                    В течение 30 дней ваша справка будет готова и направлена в ИФНС или выдана в бумажной форме.<br>
                                    Если у нас возникнут вопросы, Вам позвонит специалист.<br>
                                    У вас остались вопросы? Служба информации Спорткомплекса «Олимпия» +7-342-256782
                                </p>
                                <input id="sent_message" class="send_order_form simple_red_btn" type="button" value="Закрыть" />
                            </div>`).appendTo('body');

                            nalog_submit && nalog_submit.parentNode.removeChild(nalog_submit);
                            window.recaptcha_asq_quetion && window.recaptcha_asq_quetion.parentNode.removeChild(window.recaptcha_asq_quetion);

                            for( let field of nalog.querySelectorAll('input, select, textarea') ){
                                field.disabled = true;
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

		let nalog = document.forms['nalog'];
		let nalog_submit = nalog.querySelector('input[type="submit"]');
        
		if( !nalog )
            return;

        {

            var fields = [].slice.call( nalog.querySelectorAll('.d_f') ).concat( [].slice.call( nalog.querySelectorAll('.chkbox_') ) );
            var optionsObserve = { subtree: true, attributes: true };

            let reqField = function reqField( o ){
                o.mut.disconnect();

                if( o.field.querySelector('input[required]') )
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
			nalog.classList.add('question_form');
			nalog_submit && (
				nalog_submit.classList.add('send_question_form'),
				nalog_submit.classList.add('simple_red_btn')
			);
			BX.message({'FORMAT_DATE': 'DD.MM.YYYY'})

			nalog.addEventListener( 'submit', sendForm.bind( nalog ) );


            let files = nalog.querySelector('.d_f.file_right');

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

            let inn = nalog.form_text_65;
            let file_instead_inn = nalog.form_file_87;

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

            let form_dropdown_STEPEN = nalog.form_dropdown_STEPEN;
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
                        let field_1 = nalog[field[1]];
                        field_1[ disable ? 'setAttribute' : 'removeAttribute' ]('readonly', '');
                        
                        if( !disable && lastValue == '70' && form_dropdown_STEPEN.value != '70' ){
                            field_1.value = '';
                        }
                    }


                    lastValue = form_dropdown_STEPEN.value;
                }

                let setRemoveHandlers = function(remove){

                    for( let field of fields ){
                        let field_0 = nalog[field[0]];
                        let field_1 = nalog[field[1]];

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
                            let field_0 = nalog[field[0]];
                            
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
    
                    if( !service_keys && (!e.key?.match(/^\d+$/) || field.value.length >= 12 ) ){ 
                        e.preventDefault();
                    }
    
                }
    
                field.addEventListener( 'keydown', innEvent );
    
            }

            if( nalog.form_text_98 )
                passport_fields( nalog.form_text_98 );

            if( nalog.form_text_65 ){
                innformat( nalog.form_text_65 );
            }

            if( nalog.form_text_91 ){
                innformat( nalog.form_text_91 );


/*
                let inn_person = function (){
                    var show = !nalog.form_text_91.value.match(/^\d{12}$/) || nalog.form_text_91.value.length !== 12;

                    nalog.form_text_98.classList[show ? 'add' : 'remove' ]('required')
                    nalog.form_dropdown_TYPE_PERSON_DOC.classList[show ? 'add' : 'remove' ]('required')

                }

                inn_person();
                nalog.form_text_91.addEventListener('input', inn_person);
*/
            }
            
        }
/*
        {
            if( nalog.form_text_91 && nalog.form_text_98 ){

                let handler = function (e){
                    nalog.form_text_98[ nalog.form_text_91.value.trim().length ? 'removeAttribute' : 'setAttribute' ]('required', 'required');
                    nalog.form_text_91[ nalog.form_text_98.value.trim().length ? 'removeAttribute' : 'setAttribute' ]('required', 'required');
                };

                nalog.form_text_91.addEventListener('input', handler)
                nalog.form_text_98.addEventListener('input', handler)

                handler();
            }
        }
*/
        if( nalog.form_dropdown_type ){


            function handlerType (){

                let arr = {56: ['2024','2025'], 57: ['2024','2025'], 58: ['2023','2024','2025'], 59: ['2023','2024','2025'], 121: ['2023','2024','2025']}

                /*let desc = Object.getOwnPropertyDescriptor( nalog.form_dropdown_type, 'value' );
                
                if( !desc )
                    return setTimeout( handlerType, 50 ), false;

                let set_ = desc.set;
                let eventAccess = true;
                desc.set = function(v){ 
                    set_.call(this, v);
                    eventAccess && ( 
                        eventAccess = false,
                        nalog.form_dropdown_type.dispatchEvent( new Event('change') )
                    );
                    
                    eventAccess = true;
    
                }
                Object.defineProperty( nalog.form_dropdown_type, 'value', desc );*/



                let event = function(e){ 
                    if( !nalog.form_dropdown_period )
                        return;
    
                    var list_o = nalog.form_dropdown_period;
                    var list_f = nalog.form_dropdown_period.labels[0].querySelectorAll('.selectric-items ul li');
                    var indx = Number(nalog.form_dropdown_type.value);
                    var need_select;

                    ///console.log('event', indx)

                    for( let o of list_o ){
                        o.disabled = ( !isNaN(indx) && arr[ indx ]?.indexOf( o.innerText ) !== -1 ) ? false : true;
                        
                        if( !need_select )
                            need_select = o.disabled && nalog.form_dropdown_period.value == o.value;
                    }
    
                    for( let f of list_f ){
                        f.style.display = !isNaN(indx) && arr[ indx ]?.indexOf( f.innerText ) !== -1 ? '' : 'none';
                    }

                    if( need_select ){
                        for( let o of list_o ){
                            if( o.disabled ) continue;
                            nalog.form_dropdown_period.value = o.value;
                            nalog.form_dropdown_period.labels[0].querySelector('.selectric .label').innerText = o.innerText;
                            
                            for( let f of list_f ){
                                if( f.innerText != o.innerText ) continue;
                                f.dispatchEvent( new Event('click') );
                            }

                            break;
                        }
                    }

                }
                
                $(nalog.form_dropdown_type).on('change', event);

                setTimeout(event, 500);
    
            }

            document.addEventListener('handlerType', handlerType);

        }



        
	};


    function passport_fields(field){
        /*var template = `
            <div>
                <label>Серия паспорта</label>
                <div data-name="seriya" data-separator=" ">
                    <input type="text" data-type="number" data-max-length="2">&nbsp;&nbsp;<input type="text" data-type="number" data-max-length="2">
                </div>
            </div>
            <div>
                <label>Номер паспорта</label>
                <div data-name="nomer">
                    <input type="text" data-type="number" data-max-length="6">
                </div>
            </div>
            <div>
                <label>Код подразделения</label>
                <div data-name="kod" data-separator="-">
                    <input type="text" data-type="number" data-max-length="3">—<input type="text" data-type="number" data-max-length="3">
                </div>
            </div>
            <div data-name="vidan">
            <label>Кем выдан паспорт</label>
                <div data-name="vidan">
                    <textarea data-max-length="400"></textarea>
                </div>
            </div>
            <div data-name="date">
            <label>Дата выдачи</label>
                <div data-name="date">
                    <input type="text" placeholder="00.00.0000">
                </div>
            </div>
        `;*/

        var boxes = {};

        for( let type of nalog.form_dropdown_TYPE_PERSON_DOC.options ){
            let template = undefined;
            if( type.value == 99 )
                template = `
                    <div>
                        <label>Серия паспорта</label>
                        <div data-name="seriya">
                            <input type="text" data-type="number" data-length="4">
                        </div>
                    </div>
                    <div>
                        <label>Номер паспорта</label>
                        <div data-name="nomer">
                            <input type="text" data-type="number" data-length="6">
                        </div>
                    </div>
                    <div data-name="date">
                    <label>Дата выдачи</label>
                        <div data-name="date">
                            <input type="text" placeholder="00.00.0000">
                        </div>
                    </div>
                `;
            else if( type.value == 100 )
                template = `
                    <div>
                        <label>Серия свидетельства о рождении</label>
                        <div data-name="seriya">
                            <input type="text" data-type="rome" data-length="6">
                        </div>
                    </div>
                    <div>
                        <label>Номер свидетельства о рождении</label>
                        <div data-name="nomer">
                            <input type="text" data-type="number" data-length="6">
                        </div>
                    </div>
                    <div data-name="date">
                    <label>Дата выдачи</label>
                        <div data-name="date">
                            <input type="text" placeholder="00.00.0000">
                        </div>
                    </div>
                `;

            if( !template )
                continue;

            boxes[type.value] = setBoxes(template);

            
        }

        if( Object.keys(boxes).length ){
            let handler = function(e){
                var value = e.target?.value || e.value;

                if( !value || !boxes[value] )
                    return;
                
                for( let box in boxes )
                    boxes[box].box.parentNode?.removeChild(boxes[box].box);

                field.parentNode.appendChild(boxes[value].box);

            }
            $(nalog.form_dropdown_TYPE_PERSON_DOC).on('change', handler);

            handler(nalog.form_dropdown_TYPE_PERSON_DOC);
        }

        function setBoxes(template){    
            
            var result = {
                fields: {},
                box: document.createElement('DIV')
            };

            result.box.classList.add('passport');

            result.box.innerHTML = template;

            var fields_forms = [].slice.call( result.box.querySelectorAll('input') ).concat( [].slice.call( result.box.querySelectorAll('textarea') ) );

            for( let field_form of fields_forms ){

                let name = field_form.parentNode.getAttribute('data-name');

                if( !name )
                    continue;

                let length = Number(field_form.getAttribute('data-length'));
                let separator = field_form.parentNode.getAttribute('data-separator');
                let max_length = Number(field_form.getAttribute('data-max-length'));
                let type = field_form.getAttribute('data-type');

                let handler = handlerInput.bind(field_form, length, max_length, type);
                field_form.addEventListener('input', handler );
                !result.fields[name] && ( result.fields[name] = {separator, inputs: []} );
                result.fields[name].inputs.push(field_form);


                if( name === 'date' ){
                    field_form.id = field.id+'_date'
                    field_form.addEventListener('click', BX.calendar.bind(field_form, {field: field_form.id, node: field_form.id, bTime: false}) );
                    field_form.addEventListener('change', handler );
                }

            }

            return result;

        }

        field.type = 'hidden';

        //field.parentNode.appendChild(box);


        function handlerInput( length, max_length, type, e ){//console.log( this.value, length, max_length, type )

            if( type === 'number' ){
                let index = this.value.match(/\D/)?.index;
                !isNaN(Number(index)) && ( this.value = this.value.slice(0, index) );
            }else if( type === 'rome' ){
                this.value = this.value.toUpperCase();
                let index = this.value.match(/[^IVXLCDMА-Я-]+/)?.index;
                !isNaN(Number(index)) && ( this.value = this.value.slice(0, index) );
            }

            if( length > 0 && this.value.length > length )
                this.value = this.value.slice(this.value.length - length);

            if( max_length > 0 && this.value.length > length )
                this.value = this.value.slice(0, max_length);


            function getValues(name){
                var values = [];

                let fields = boxes[nalog.form_dropdown_TYPE_PERSON_DOC.value]?.fields;

                if( !fields?.[name]?.inputs )
                    return '';

                for(let input of fields[name].inputs ){
                    values.push(input.value);
                }

                return values.join(fields[name].separator);
            }

            field.value = getValues('seriya') + ', ' + getValues('nomer') + ', ' + getValues('date');
        }
    }

    


    document.addEventListener('DOMContentLoaded', initForm);
    document.addEventListener('DOMContentLoaded', formatPeriod);

    document.addEventListener('DOMContentLoaded', setInputFile);
    document.addEventListener('DOMContentLoaded', convertDateField);
	document.addEventListener('DOMContentLoaded', function(){
		document.dispatchEvent( new Event('handlerStepen') );
		document.dispatchEvent( new Event('handlerType') );
	});
})();





