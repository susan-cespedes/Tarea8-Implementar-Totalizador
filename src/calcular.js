import impuestoEstado from "./impuesto"
function calcularneto(a, b) {
  return a * b;
}

function calculartotal(total,impuesto) {
  let descuento=0;
  
  if ((total>=1000) && (total<3000)){
    descuento=total*0.01;

    return{
      totalConDescuento:((total * impuesto/100)+total)-descuento,
      descuento:descuento,
   }; 
  }

  if ((total>=3000) && (total<7000)){
    descuento=total*0.02;

    return{
      totalConDescuento:((total * impuesto/100)+total)-descuento,
      descuento:descuento,
   }; 
  }

  if ((total>=7000) && (total<10000)){
    descuento=total*0.03;

    return{
      totalConDescuento:((total * impuesto/100)+total)-descuento,
      descuento:descuento,
   }; 
  }

  


return {
  totalConDescuento: (total * impuesto/100)+total,
  descuento:0,
};
  
}

export {calcularneto,calculartotal};
