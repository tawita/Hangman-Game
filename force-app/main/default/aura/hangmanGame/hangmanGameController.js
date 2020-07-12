({
    onCount : function(component, event, helper) {
       // console.log("here onCount parent");
        var count = event.getParam('countSelect');
        //console.log("ShowHangman parent: " + count);
        component.set("v.count",count);
    },
})
