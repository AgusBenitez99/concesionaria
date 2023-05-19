let autos = require('./autos.json')
let concesionaria = {
   autos: autos,
   buscarAuto: function (patente) {
      const lala=this.autos.find(i=>i.patente===patente) || null
     
      return lala
   },
   venderAuto: function (patente) {
      const lala1 = this.buscarAuto(patente)
      lala1.map((d)=>{
         d.vendido=true;
      })
      return lala1

   },
   autosParaLaVenta: function () {
      const lala = this.autos.filter(i => i.vendido === false)
      return lala
   },
   autosNuevos: function () {
    
      
      const lala1 = this.autosParaLaVenta().filter(i => i.km < 100  )
      return lala1
      
      

   }, 
   listaDeVentas:function(){
     
      const lala=this.autos.filter(d=>d.vendido===true)
      const lala1=lala.map((d)=>{
            if (d.vendido===true) {
               return d.precio
            }else{
               return []
            }
         })
         
      return lala1
   },
   totalDeVentas:function(){      
      return this.listaDeVentas.reduce((acum,num)=>
      acum+num
  ,0)
   },
   puedeComprar:function (auto,persona) {
    
      return auto.precio<=persona.capacidadDePagoTotal && (auto.precio/auto.cuotas)<=persona.capacidadDePagoEnCuotas
   },
   autosQuePuedeComprar:function (persona) {
      const lala=this.autosParaLaVenta().filter(i=>this.puedeComprar(i,persona))
      return lala
   }


}
console.log(concesionaria.autosQuePuedeComprar({
      nombre: "Juan",
      capacidadDePagoEnCuotas: 200000,
      capacidadDePagoTotal: 1000000
      }));
//  console.log(concesionaria.puedeComprar("JJK116",{
//    nombre: "Juan",
//    capacidadDePagoEnCuotas: 5000,
//    capacidadDePagoTotal: 100000
//    }));
