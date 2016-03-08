function Court(ID){
    this.minX = 0;
    this.minY = 0;
    this.maxX = 0;
    this.maxY = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.absoluteYPosition = 0;
    this.object = document.getElementById(ID);

    this.setSize = function(minX, minY, maxX, maxY){
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;

        this.centerX = parseInt((this.maxX-this.minX)/2);
        this.centerY = parseInt((this.maxY-this.minY)/2);
    };

    this.setPosition = function(){
        var ob = this.object.parentNode;

        while (ob && ob.offsetTop) {
            if (parseInt(ob.parentNode.offsetTop)>0){
                this.absoluteYPosition += parseInt(ob.offsetTop);
            }

            ob = ob.parentNode;
        }
    };
}
