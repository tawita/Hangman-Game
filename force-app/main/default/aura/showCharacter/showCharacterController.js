({
    doInit : function(component, event, helper) {
        var words = ['ALPACA', 'BUTTERFLY', 'CAMEL', 'DOLPHIN', 'DINOSAUR'];
        var word = words[Math.floor(Math.random() * words.length)];
        console.log("doinit    " + word);
        component.set("v.wordRandom",word);
        var correctChar = word;
        
        for(var i=0;i<correctChar.length;i++){
            var res = correctChar.charAt(i);
            correctChar = correctChar.replace(res,"_");
        }
        console.log("word  " + correctChar);
        component.set("v.correctChar",correctChar);

    },

    onSelect : function(component, event, helper) {
        var eve = event.getParam('selectChar');
        var word = component.get("v.wordRandom");
        var count = component.get("v.count");
        var correctChar = component.get("v.correctChar");
        var outWordl = correctChar;
        var outWordr = correctChar;
        var sumct = 0;
        for(var i=0;i<word.length;i++){
            //var chWord = word.charAt(i);
            
            if(word[i]==eve){
                outWordl = correctChar.substring(0, i);
                outWordr = correctChar.substring(i+1, word.length);
                correctChar = correctChar.substring(i, i+1);
                correctChar = correctChar.replace(correctChar,eve);
                correctChar = outWordl+correctChar+outWordr;

                //console.log("correctChar: " +correctChar);
                sumct++;
                //component.set("v.hideButton",false);
                
            }
        }
        //console.log(correctChar);
        component.set("v.correctChar",correctChar);


        if(sumct==0){
            count++;
            component.set("v.count",count);
            //console.log("count  " + count);
            //register count
            var countSelect = component.getEvent("countSelect");
            countSelect.setParams({
                "countSelect":count
            });
            countSelect.fire();
        }

        if(word==correctChar){
            component.find("outName").set("v.value","You Win!!");
            component.set("v.hideButton",false);
        }
        if(count==8){
            component.find("outName").set("v.value","You Lose!!");
            component.find("outName1").set("v.value","Answer is "+word);
            component.set("v.correctChar",word);
            component.set("v.hideButton",false);
            
        }
             
    },

    doRefresh  : function(component, event, helper){
        $A.get('e.force:refreshView').fire();
    }

})
