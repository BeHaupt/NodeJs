var media, soma, n1, n2 , n3 ;

n1= prompt('Insira a primeira nota:');
n1= eval (n1)
n2= prompt('Insira a segunda nota:');
n2= eval (n2)
n3= prompt('Insira a terceira nota:');
n3= eval (n3)

soma = n1 + n2 + n3
media = soma /3

if 
(media >= 6 ) {
    alert('Você PASSOU! Sua nota média é:'+ " " + media + '.')
}
else {
    alert('Você REPROVOU! Sua nota média é:' + " " + media + '.')
}


