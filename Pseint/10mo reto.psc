Algoritmo mayorEdad
	Definir mario Como Entero
	Definir rocio Como Entero
	Definir valeria Como Entero
	
	mario = 18
	rocio = 28
	valeria = 20
	
	Si (mario<rocio y mario<valeria) Entonces
		Escribir "Mario es el menor y tiene " mario " años"
	SiNo
		si(rocio<mario y rocio<valeria)Entonces
		Escribir "Rocio es la menor y tiene " rocio " años"
	SiNo
		si(valeria<mario y valeria<rocio)Entonces
		Escribir "Valeria es la menor y tiene " valeria " años"
	SiNo
		Escribir "TODOS TIENEN LA MISMA EDAD"
	FinSi
	FinSi
	Fin Si
FinAlgoritmo