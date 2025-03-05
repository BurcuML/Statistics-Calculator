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
  // median değeri Ternary Operator ile de yazılabilirdi, tıpkı aşağıda görüldüğü gibi:

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

  const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
      counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
      return null;
    }
    const highest = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a]
    )[0];
    const mode = Object.keys(counts).filter(
      (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
  }

  const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
  }
  
  const getVariance = (array) => {
    const mean = getMean(array); 
    const variance = array.reduce((acc, el) => { // array dizisi üzerinde reduce fonksiyonu kullanılır. .reduce() fonksiyonu, dizideki her eleman üzerinde belirli bir işlem yaparak tek bir sonuç (bu durumda varyans) üretir.                                         
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length; // 0: .reduce() fonksiyonunun başlangıç değeridir. Yani acc (accumulator - biriktirici) değişkeni başlangıçta 0'dır.
    return variance;
  }

//Bu fonksiyon, standart sapmayı hesaplayan bir işlemdir. Önce dizinin varyansını hesaplarız ve sonra bu varyansın karekökünü alarak standart sapmayı buluruz. Standart sapma, verilerin ortalamadan ne kadar uzaklaştığını gösteren bir ölçüdür.
  const getStandardDeviation = (array) => {
    const variance = getVariance(array); //Bu satır, dizinin varyansını (variance) hesaplamak için getVariance adında fonksiyonu çağırır ve sonucu variance adında bir sabite atar. Yani, standart sapmayı hesaplamadan önce, önce varyansı bulmamız gerekiyor.
    const standardDeviation = Math.sqrt(variance); //Bu satır, varyansın karekökünü alarak standart sapmayı hesaplar ve sonucu standardDeviation adlı bir sabite atar. Math.sqrt() fonksiyonu, JavaScript'te bir sayının karekökünü almak için kullanılır.
    return standardDeviation;
  }


  const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g); // Bu kod, kullanıcının girdiği sayıları virgül ve boşluk karakterlerine göre ayırarak bir diziye dönüştürür. 
    // .split() metodu, belirtilen desene göre bir dizi oluşturur. Bu durumda, /,\s*/g(regular expression) deseni, virgül ve boşluk karakterlerine göre ayırma işlemi yapar.
    
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el)); // Bu kod bir dizi elemanını sayılara dönüştürmek ve sayısal olmayan değerleri filtrelemek için kullanılır. 
    /**
     array.map(el => Number(el)): Bu kısım, array dizisindeki her bir elemanı (el) alır ve Number(el) fonksiyonunu kullanarak bu elemanı bir sayıya dönüştürür. 
     .map() metodu, orijinal dizinin her bir elemanına bu dönüşümü uygulayarak yeni bir dizi oluşturur. Eğer eleman bir sayıya dönüştürülemezse, Number(el) fonksiyonu NaN (Not-a-Number) döndürür.
     .filter(el => !isNaN(el)): Bu kısım, map metodu tarafından oluşturulan yeni dizideki elemanları filtreler. .filter() metodu, belirtilen koşulu sağlayan elemanları içeren yeni bir dizi oluşturur. 
     Bu durumda, !isNaN(el) koşulu kullanılarak NaN olmayan elemanlar seçilir. isNaN(el) fonksiyonu, elemanın NaN olup olmadığını kontrol eder ve true veya false döndürür. !isNaN(el) ifadesi ise NaN olmayan elemanları seçer.

     Sonuç olarak, numbers adında yeni bir dizi oluşturulur ve bu dizi sadece sayısal değerleri içerir. Sayısal olmayan tüm değerler filtrelenmiş olur.
     */


    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const range= getRange(numbers);
    const variance = getVariance(numbers);
    const mode = getMode(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#mode").textContent =mode
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
  }
