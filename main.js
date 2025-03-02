/**
 **Implicit Return**

JavaScript ve bazı diğer programlama dillerinde kullanılan bir kavramdır. 
Bir fonksiyonun gövdesi sadece bir ifade içerdiğinde, 
bu ifadeyi döndüren bir değer vermek için return anahtar kelimesini kullanmaya gerek kalmadan otomatik olarak o ifadeyi döndürmesidir.
Örneğin, JavaScript'te bir arrow function kullanıldığında, eğer fonksiyonun gövdesi süslü parantezler olmadan yazılırsa, 
bu durum implicit return sağlar.


**Spread Operator(...)**

Bir dizi veya nesnenin elemanlarını "yaymak" için kullanılır. Örneğin: 

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

Bu kod, arr dizisinin elemanlarını alarak yeni bir newArr dizisi oluşturur ve bu dizinin sonuna 4 ve 5 sayılarını ekler.
 
*/


/**
 * const sum = array.reduce((acc, el) => acc + el, 0); 
 
Bu kod, bir dizi içindeki tüm elemanların toplamını hesaplamak için kullanılır. .(reduce) metodu, dizinin her bir elemanını döngüsel olarak alır ve belirtilen işlemle (bu durumda toplama) bir sonuç üretir.

"acc" (akümülatör), döngü boyunca biriken toplamı temsil eder.
"el," dizinin her bir elemanını temsil eder.
"0", .(reduce) metodunun başlangıç değeri olarak kullanılır; böylece toplam hesaplaması sıfırdan başlar.
Sonuç olarak, bu kod dizi içinde bulunan bütün sayıları toplar ve toplam değeri sum değişkenine atar.

 */

// const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length; -> Bu şekilde de yapabiliriz (implicit return)
const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0);
    const mean = sum / array.length;
    return mean;
  }
  
  // Ternary operator, JavaScript'te koşullu ifadeleri kısa ve öz bir şekilde ifade etmek için kullanılır. 
  // median değeri Ternary Operator ile de yazılabilirdi, tıpki aşağ görüldüğü gibi.

  //const median = sorted.length % 2 === 0 ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]]) : sorted[Math.floor(sorted.length / 2)];

  const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);
    let result = sorted.length % 2 === 0;
    if(result){
      return getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]]); //find the middle two numbers, calculate their mean
    }else{
      return sorted[Math.floor(sorted.length / 2)]; // return the middle number
    }
  }

  const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
  }