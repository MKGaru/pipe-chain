Object.defineProperty(Object.prototype,'pipe',{
  value:function(f){
    var value = this.valueOf();
    return (typeof f=='function')
      ? f(value)
      : value
  },
  writable:true,
  configurable:true
});