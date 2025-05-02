import { Component, OnInit } from '@angular/core';

interface Habito {
  nombre: string;
  completado: boolean;
}

@Component({
  selector: 'app-habitos',
  templateUrl: './habitos.component.html',
  styleUrls: ['./habitos.component.scss'],
})
export class HabitosComponent implements OnInit {
  habitos: Habito[] = [];
  nuevoHabito: string = '';

  ngOnInit(): void {
    const data = localStorage.getItem('habitos');
    if (data) {
      this.habitos = JSON.parse(data);
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem('habitos', JSON.stringify(this.habitos));
  }

  crearHabito() {
    if (this.nuevoHabito.trim()) {
      this.habitos.push({ nombre: this.nuevoHabito, completado: false });
      this.nuevoHabito = '';
      this.guardarEnLocalStorage();
    }
  }

  completarHabito(index: number) {
    if (!this.habitos[index].completado) {
      this.habitos[index].completado = true;
      this.guardarEnLocalStorage();
      alert(
        `¡Felicidades! Completaste el hábito: ${this.habitos[index].nombre}`
      );
    }
  }

  reiniciarHabitos() {
    this.habitos.forEach((h) => (h.completado = false));
    this.guardarEnLocalStorage();
    alert('Todos los hábitos fueron reiniciados para hoy.');
  }
}
