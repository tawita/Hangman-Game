({
    getInput : function(component, event, helper) {
        //console.log('testtttttttttttttt');
        var myButton = component.find("button").get("v.value");
        //console.log("myButton: " + myButton);
        var selectChar = component.getEvent("selectChar");
        selectChar.setParams({
                "selectChar":myButton
        });
        selectChar.fire();

        component.set("v.hideButton",false);
        //document.getElementById("button").disabled = true; 
      }
})
