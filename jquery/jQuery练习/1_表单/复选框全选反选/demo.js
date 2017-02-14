$(function(){
    $("#CheckedAll").on('click',function(){
        $('[name="items"]:checkbox').prop('checked',true);
    });
    $('#CheckedNo').on('click',function(){
        $('[name="items"]:checkbox').prop('checked',false);
    });
    $('#CheckedRev').on('click',function(){
       // $('[name="items"]:checkbox').prop('checked',!this.checked);
        $(':checkbox').each(function(){
                this.checked=!this.checked;
            })


    });
    $('#send').on('click',function(){
        var str='';
        $(':checked').each(function(){
            str+=$(this).val();
        });
        console.log(str);
        alert(str);
    })
});
