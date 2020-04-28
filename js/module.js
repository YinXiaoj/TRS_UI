
    //tab切换
    $(".trs_tab").each(function(){
        var item=$(this).find(".trs_tab_item");
        var con=$(this).find(".trs_tab_content");
        item.children("li").hover(function(){
            $(this).addClass("trs_active").siblings().removeClass("trs_active");
            con.find(".trs_tab_panel").eq($(this).index()).show().siblings().hide();
        })
    })

    //select单选框
    $(".js_select").each(function(){
        createSelect($(this));
    });
    function createSelect(selectCon){
         selectCon.prev().remove();
         var select_tag=$('<div class="select_item"></div>');
         select_tag.insertBefore(selectCon);
         var select_showbox=$('<div class="select_showbox"></div>');
         select_showbox.appendTo(select_tag);
         var option_ul=$('<ul class="select_option"></ul>');
         option_ul.appendTo(select_tag);
    
         createOption(option_ul,selectCon);
         select_tag.on("click",function(){
             if(option_ul.is(":hidden")){
                option_ul.show();
             }else{
                option_ul.hide();
             }
         });
         var option_li=option_ul.find("li");
         option_li.on("click", function(e){   
             e.stopPropagation();     
             $(this).addClass('is_selected').siblings().removeClass('is_selected');
             var text=$(this).text();
             var value=$(this).attr("value");
             select_showbox.text(text);             
             selectCon.val(value).trigger('change');    
             option_ul.hide();
             return false;
         });
     }
     function createOption(ulList,selectCon){
         var options=selectCon.find("option");
         selected_option=options.filter(":selected");
         selectes_index=selected_option.index();
         var showbox=ulList.prev();
         showbox.text(selected_option.text());
         for(var j=0;j<options.length;j++){
             var option_tag=$('<li></li>');
             option_tag.text(options.eq(j).text()).attr("value",options.eq(j).attr("value")).appendTo(ulList);
             if(j==selectes_index){
                option_tag.attr("class","is_selected");
             }
         }
     }
