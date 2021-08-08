 
   let convertor=function(f){

       let c=(f-32)*5/9;
       return c;
   }

   let temperature=convertor(32);
   console.log(temperature);

   let other=convertor(67);

   console.log(other);