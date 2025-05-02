import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Nota {
  categoria: string;
  nombre: string;
  contenido: string;
}

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent implements OnInit {
  categorias = ['Personal', 'Trabajo', 'Ideas', 'Otros'];
  notas: Nota[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const stored = localStorage.getItem('notas');
    this.notas = stored ? JSON.parse(stored) : [];
  }

  guardarNota(): void {
    if (this.form.valid) {
      const nuevaNota = this.form.value;
      this.notas.push(nuevaNota);
      localStorage.setItem('notas', JSON.stringify(this.notas));
      this.form.reset();
    }
  }

  eliminarNota(index: number): void {
    const confirmacion = window.confirm(
      '¿Estás seguro de que deseas eliminar esta nota?'
    );

    if (confirmacion) {
      this.notas.splice(index, 1);
      localStorage.setItem('notas', JSON.stringify(this.notas));
      alert('Nota eliminada correctamente.');
    }
  }
}
