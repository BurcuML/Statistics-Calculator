/**
 **Implicit Return**

JavaScript ve bazı diğer programlama dillerinde kullanılan bir kavramdır. 
Bir fonksiyonun gövdesi sadece bir ifade içerdiğinde, 
bu ifadeyi döndüren bir değer vermek için return anahtar kelimesini kullanmaya gerek kalmadan otomatik olarak o ifadeyi döndürmesidir.
Örneğin, JavaScript'te bir arrow function kullanıldığında, eğer fonksiyonun gövdesi süslü parantezler olmadan yazılırsa, 
bu durum implicit return sağlar.

 */


/**
 * const sum = array.reduce((acc, el) => acc + el, 0); 
 
Bu kod, bir dizi içindeki tüm elemanların toplamını hesaplamak için kullanılır. .(reduce) metodu, dizinin her bir elemanını döngüsel olarak alır ve belirtilen işlemle (bu durumda toplama) bir sonuç üretir.

"acc" (akümülatör), döngü boyunca biriken toplamı temsil eder.
"el," dizinin her bir elemanını temsil eder.
"0", .(reduce) metodunun başlangıç değeri olarak kullanılır; böylece toplam hesaplaması sıfırdan başlar.
Sonuç olarak, bu kod dizi içinde bulunan bütün sayıları toplar ve toplam değeri sum değişkenine atar.

 */
const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0);
    const mean = sum / array.length;
    return mean;
  }
  
  const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  }