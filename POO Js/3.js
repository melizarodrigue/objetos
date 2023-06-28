/*3. Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual. */

class CuentaBancaria {
    constructor(titular) {
      this.saldo = 0;
      this.titular = titular;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
      console.log(`Se depositó ${cantidad} en la cuenta. Saldo actual: ${this.saldo}`);
    }
  }
  
  // Ejemplo de uso:
  const miCuenta = new CuentaBancaria("Juan");
  miCuenta.depositar(100);