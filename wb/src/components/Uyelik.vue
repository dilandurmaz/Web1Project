
<template>
    
    <div>
     
  <b-card no-body >
    <div>
      <h5 style="color:black ;float:left;"> <strong>S.S.S </strong>
        <span style="color:#00ccc2;">/ <strong> İLETİŞİM </strong></span>
      </h5>
      </div>
    <b-tabs pills card vertical style="float:left;">
<!--------------------------------------------------------------------------------------------->

      <b-tab  title="Üyelik "  active>
<!--Soru1-->
<div>
  <button v-b-toggle.collapse-1 style= "background: #ccc;border:none;outline:none;height:30px;width:800px;text-align:initial;float:left;">Üye olmadan da alışveriş yapabilir miyim?  </button>
  <b-collapse id="collapse-1" class="mt-2"  style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text" style="top:5px;position:relative;">     
          Sitemize üye olmadan alışverişinizi yapabilirsiniz. Sepetinize beğendiğiniz ürün/ürünleri ekledikten sonar, siparişi tamamla > üye olmadan devam et seçeneğine tıklayın. Siparişinizi size doğru bir şekilde teslim edebilmemiz için gerekli olan adınız, soyadınız, adresiniz, telefon numaranız ve e-mail adresi gibi temel bilgileri doldurup, ödeme seçeneğinizi belirterek siparişinizi tamamlayabilirsiniz
      </span>
    </b-card>
  </b-collapse>

</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;height:30px;width:800px;text-align:initial;float:left;">Şifremi Unuttum</button>
  <b-collapse id="collapse-2" class="mt-2"   style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text"  style="top:5px;position:relative;" >
  Sitenin Üye Girişi bölümlerinde yer alan "Şifremi Unuttum" link''ine tıklayıp açılan sayfada, Kahve Dünyası Sanal Mağaza üyeliğinde kullandığınız email adresinizi girerek yeni şifre talebinde bulunabilirsiniz. Yeni şifreniz otomatik olarak oluşturulup, üyelikte kullandığınız email adresinize gönderilecektir.
      </span>
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3   style= "background: #ccc;border:none;outline:none;height:30px;width:800px;text-align:initial;float:left;">Şifre değiştirme</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text" style="top:5px;position:relative;" >
Şifrenizi değiştirmek için “Üyelik Bilgilerim” bölümündeki “Şifremi İşlemleri” sekmesini kullanarak yeni şifre oluşturabilirsiniz.
</span>     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-4  style= "background: #ccc;border:none;outline:none;height:30px;width:800px;text-align:initial;float:left;">Üyeliğimi nasıl güncelleyebilirim</button>
  <b-collapse id="collapse-4" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;">
                 Kahve Dünyası Sanal Mağaza''ya kayıtlı iseniz Giriş menüsünden üyelik girişi yaptıktan sonra "Şifre İşlemleri" bölümünden üyelik bilgilerinizi güncelleyebilirsiniz. Açılan üyelik ekranında e-postanızı, şifrenizi, kişisel ve iletişim bilgilerinizi değiştirebilir ya da güncelleyebilirsiniz</span> 

    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Sipariş İşlemleri">
  <!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Sipariş nasıl verilir?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text"  style="top:5px;position:relative;">   
    Sepetinize eklemek istediğiniz ürünün hemen yanında bulunan "Sepete Ekle" butonunu kullanarak bu işlemi gerçekleştirebilirsiniz.

Sipariş sürecini başlatmak için, Sepetim sayfasında bulunan "Satın Al" butonuna tıklamalısınız.

Siparişinizin teslim edilmesini istediğiniz adresi de girdikten sonra siparişinizle ilgili tüm detayları görüp ,ödemenizi kredi kartınız ve banka kartlarınız ile güvenle yapabilirsiniz

Bu aşamada tüm bilgileriniz 128-bit SSL güvenliği altında olacaktır.
       
    </span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Siparişimde değişiklik yapabilir miyim?</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;">
       Siparişinizi verdikten sonra sipariş değişikliği yapamazsınız.</span> 
   </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Türkiye'nin her yerinden sipariş verebilir miyim?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
    <span class="card-text" style="top:5px;position:relative;">
        Türkiye’nin her noktasından sipariş verebilirsiniz. Tüm şehirlere en geç 1 – 3 iş günü içinde teslimat yapılır.</span>   
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-4  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Sipariş takibi</button>
  <b-collapse id="collapse-4" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;" >
       Siparişlerinizin durumunu “Üyelik Bilgilerim” bölümündeki “Siparişlerim” sekmesini kullanarak inceleyebilirsiniz. Siparişlerinizin durumunu takip edebilmeniz için üye olmanız gerekmektedir.</span> 
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Ödeme İşlemleri">
 <!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Kredi kartına taksit yapılıyor mu?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;">
       Sanal mağazamızdan yapılan tüm alışverişlerde kredi kartına tek ödeme seçeneği sunuluyor. Taksitli ödeme seçeneği bulunmuyor.</span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Ödemede kredi kartım hata veriyor.</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;">
       Kredi kartı ödemelerinde ortaya çıkan hata uyarıları için kredi kartının ait olduğu bankaya başvurulması gerekiyor.</span>   
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Siparişimi havale yolu ile ödeyebilir miyim?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <span class="card-text" style="top:5px;position:relative;">
        Havale yöntemi ile sipariş verebilirsiniz.</span> 
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-4  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Siparişimi nasıl ödeyebilirim</button>
  <b-collapse id="collapse-4" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text" style="top:5px;position:relative;">
       Havale yöntemi ile sipariş verebilirsiniz.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru5-->
<div>
  <button v-b-toggle.collapse-5  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Kapıda ödeme yapabilir miyim?</button>
  <b-collapse id="collapse-5" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
         <span class="card-text" style="top:5px;position:relative;">
             Sitemizden yapacağınız alışverişlerde ödemenizi kredi kartınız/banka kartınız ve havale yöntemi ile güvenle yapabilirsiniz.</span> 
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Teslimat Süreci">
<!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Resmi tatil günlerinde teslimat yapılıyor mu?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text" style="top:5px;position:relative;text-align:initial;">
         Resmi tatil günlerinde teslimat yapılmıyor. </span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Siparişim hangi kargo şirketi ile gönderilecek?</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text" style="top:5px;position:relative;text-align:initial;" >
      Sitemiz üzerinden vereceğiniz siparişleriniz İstanbul içi belirli bölgelere kendi araçlarımız ile diğer bölgelere ise Aras ve Ups Kargo ile teslim edilmektedir.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3 style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;"   >Teslimat süresi ne kadardır?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
     <span class="card-text"  style="top:5px;position:relative;text-align:initial;" >Tüm siparişleriniz Türkiye’nin her yerine 1-3 iş günü içinde teslim ediliyor.</span>  
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-4  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Kargonun teslimat zamanını belirleyebilir miyim?</button>
  <b-collapse id="collapse-4" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text" style="top:5px;position:relative;text-align:initial;" >
          Kargonun teslimat zamanı seçeneği bulunmuyor. Siparişinizi takiben ürünleriniz Türkiye’nin her yerine 1-3 iş günü içinde teslim ediliyor.
        </span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru5-->
<div>
  <button v-b-toggle.collapse-5  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Kargom yola çıkmış ancak adresimi değiştirebilir miyim?</button>
  <b-collapse id="collapse-5" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text"  style="top:5px;position:relative;text-align:initial;"> 
          İlk belirttiğiniz adrese teslim edilmek üzere yola çıkan kargonun adresi değiştirilemiyor
      </span>
    </b-card>
  </b-collapse>
</div>
<br>
<br>
  <!--Soru6-->
<div>
  <button v-b-toggle.collapse-6  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Teslimat süreci</button>
  <b-collapse id="collapse-6" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
     <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
         Paketlerinizin yukarıda verilen süreler içinde teslim edilmemesi durumunda sanalmagaza@kahvedunyasi.com adresinden bize ulaşın. Kargo şirketi tarafımızdan aranarak, size, paketinizin teslim tarihi hakkında bilgi verilecektir. Paket teslim alındıktan sonra teslimatçı firmanın görevini layıkıyla yaptığı kabul edilmiş sayılır. Onun için: Teslimat sırasında hasarlı olduğunu tespit ettiğiniz paketleri kabul etmeyip tutanak tutturunuz. Kahve Dünyası Sanal Mağaza paketinizle ilgili çalışmalara başlayarak, en kısa zamanda teslimatın tekrarlanmasını sağlayacaktır.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru7-->
<div>
  <button v-b-toggle.collapse-7  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Ürün adedine göre kargo fiyatı değişiyor mu ?</button>
  <b-collapse id="collapse-7" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
      Ürün adedinize göre kargo ücreti değişmiyor. 75 TL ve üzerindeki tüm alışverişlerde kargo bedeli ödenmiyor. 75 TL altı alışverişlerde kargo ücreti 5,90 TL'dir.
  </span>
  </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru8-->
<div>
  <button v-b-toggle.collapse-8  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Aynı gün teslimat nedir?</button>
  <b-collapse id="collapse-8" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;" >
    <b-card>
  <span class="card-text" style="top:5px;position:relative;text-align:initial;" >
Saat 12:00’a kadar verilen siparişler İstanbul içi belirli bölgelere aynı gün 18:00’a kadar teslim edilmektedir.

Bugün teslimat seçeneği, özel bir hizmet olup sipariş gönderim bedeli 15.90 TL’dir
      </span>     </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru9-->
<div>
  <button v-b-toggle.collapse-9  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Ertesi gün veya belirli bir günde teslimat nedir?</button>
  <b-collapse id="collapse-9" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
    <span class="card-text"  style="top:5px;position:relative;text-align:initial;">

        <strong>Ertesi gün ya da belirli bir tarihte teslimat seçeneğimiz şu an için sadece İstanbul,Ankara,İzmir,Bursa ve Kocaeli ile sınırlıdır.</strong>

09:00-13:00 , 13:00 -18:00 ve 18:00 - 23:00 olmak üzere üç farklı saat aralığı seçilebilmektedir.

Ertesi gün ya da belirli bir tarihte teslimat seçeneği, özel bir hizmet olup sipariş gönderim bedeli 9,90 TL’dir.
        
    </span> 
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="İade İşlemleri">
<!--Soru1-->
<div>
  <button v-b-toggle.collapse-1   style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Ürünü nasıl iade edebilirim?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
   <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
       Kalite, hijyen ve tazeliğin büyük önem taşıdığı Kahve Dünyası ürünleri titizlikle paketleniyor.Ancak taşımadan kaynaklanabilecek sorunları engellemek amacıyla, siparişinizi kargo şirketinden teslim almadan önce sipariş verdiğiniz ürünleri kontrol etmenizi rica ediyoruz.Hızlı bozulan ürünler, gıda ürünleri, tek kullanımlık ürünler nitelikleri itibariyle iade edilemeyecek ürünlerdir ve bu ürünlerde Alıcı’nın iade hakkından yararlanması mümkün olmayacaktır.Hediyelik eşya, kırılacak eşya vb. ürünlerde iade hakkının kullanılması, ürünün ambalajının açılmamış, bozulmamış ve ürünün kullanılmamış olması şartına bağlıdır.

Bozuk, açılmış, yırtılmış ambalajlı ürünlerimizi veya kırık, hasarlı olduğunu fark ettiğiniz ürünleri teslim almadan kargo şirketine iade etmeniz gerekiyor.Kargo şirketi ücretsiz olarak kapıda ürünleri teslim alıp tarafımıza teslim edecek, siz ayrıca bir ücret ödemeyeceksiniz.
       
       
    </span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Her ürünü iade edebilir miyim?</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
      TTK gereğince gıda maddeleri, içecekler veya diğer günlük tüketim maddeleri için cayma hakkı bulunmamaktadır. Bunların dışında kalan orijinal ambalajı hasar görmemiş, kullanılmamış, kullanım hatası sonucu zarar görmemiş tüm ürünler iade edilebilir.

Ambalajı açılmış, kullanılmış ve tahrip edilmiş ürünlerin iadesi kabul edilmemektedir.

Hiçbir gerekçe belirtmeksizin yapabileceğiniz ürün iadesinin, ürünün tarafınıza teslim edildiği hali ile gerçekleştirilmesi gerekmektedir. Satın aldığınız üründe veya ürün ambalajında herhangi bir bozulma, açılma, kırılma, yırtılma, aksesuarlarında eksiklik ve sair hallerin tespiti halinde ürün iadesi kesinlikle kabul edilmemektedir.

Ürünün faturası gönderilmemişse, eksikse iade kabul edilmez. İade edilecek ürünlerin mutlaka ürün faturasının orijinali ile birlikte teslimi gerekmektedir.

Gerekçesiz ürün iadesi malın tarafınıza teslimini takip eden 14 günlük süre içerisinde ve yazılı şekilde yapılmalıdır.

İadesi yapılacak ürünler Kahve Dünyası Sanal Mağaza''nın çalıştığı kargo şirketleri aracılığı ile tarafımıza ulaştırılmalıdır.

Ürün, paket koruyucu bir ambalaj içerisine yerleştirilmeli ve kargo şirketinin etiketi ürün ambalajının üzerinde bulunmamalıdır. Ürünün ambalajında meydana gelecek olan deformasyon, ürünün tekrar satılmasını engelleyen durumlar arasında yeralmaktadır.

Yukarıda belirtilen koşulları taşımayan ürün iadeleri kesinlikle kabul edilmemektedir.

Siparişinizle herhangi bir durumda bize sanalmagaza@kahvedunyasi.com mail adresinden ya da 0212 358 08 08 numaralı telefondan ulaşabilirsiniz.
      
    </span>   
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">İade etme süreci kaç gün?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;" >
      Ürünler kargonuzun size ulaştığı günden itibaren 7 gün içerisinde iade edilebilir.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-4  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">İade kargo masraflarını ben mi ödeyeceğim?</button>
  <b-collapse id="collapse-4" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
          İade etmek istediğiniz ürünlerin kargo masrafını Kahve Dünyası üstleniyor.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru5-->
<div>
  <button v-b-toggle.collapse-5  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >İade ettiğim ürünün ödemesi ne zaman yapılır?</button>
  <b-collapse id="collapse-5" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
     <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
         İade ettiğiniz ürünler Kahve Dünyası yetkilileri tarafından teslim alındığında size bilgi mesajı ulaşacaktır. Bunu takip eden 7 iş günü içerisinde ödediğiniz tutar kredi kartınıza iade edilecektir.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
  <!--Soru6-->
<div>
  <button v-b-toggle.collapse-6  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Teslimattan kaynaklanan problemler</button>
  <b-collapse id="collapse-6" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
      İade ettiğiniz ürünler Kahve Dünyası yetkilileri tarafından teslim alındığında size bilgi mesajı ulaşacaktır. Bunu takip eden 7 iş günü içerisinde ödediğiniz tutar kredi kartınıza iade edilecektir.</span> 
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Ürün Gamı">
<!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Sanal mapazada kahve dünyasında satılan tüm ürünler var mı ?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
     Mağazalarımızda bulunan ve kargo ile gönderilebilecek “paketli” her ürün sanal mağazamızdan da satın alınabilir.</span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2   style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Sanal mağazadan açık ürün sipariş edebilir miyim?</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;" >
      Sanal mağazamızda açık ürün satışı yapılmıyor.</span>   
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Sanal mağazadan pasta sipariş edebilir miyim?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;" >
      Pasta gibi açık satılan unlu mamullerimizin tazeliğini koruyabilmemiz için sadece İstanbul içi ilgili bölgelere teslimat yapıyoruz. İstanbul içi ilgili bölgelerden sipariş verebilirsiniz.</span>  
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Teknik Konular">
<!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">12 bit SSL nedir?</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
      <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
          Sipariş işlemleri sırasında 128 Bit SSL güvenlik alanı içinde hareket edilir. Bu, pratik olarak kırılması mümkün olmayan bir şifrelemedir.</span> 
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Dikkat:Siparişinizle ilgili göndereceğiniz e-postarda asla kredi kartını yazmayınız </button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
      E-postalarda yer alan bilgilerin üçüncü şahıslar tarafından görülme olasılığı bulunmaktadır. Kahve Dünyası Sanal Mağaza, e-postalarda aktarılan bilgilerin güvenliğini hiçbir koşulda garanti edemez. Kredi kartı numarasının bildirilmesini gerektiren durumlarda 0212 358 08 08 numaralı telefondan Kahve Dünyası Sanal Mağaza müşteri hizmetleri ile iletişim kurunuz.</span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3   style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Sanal mağazadan pasta sipariş edebilir miyim?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
       <span class="card-text"  style="top:5px;position:relative;text-align:initial;">
           Müşteri isteklerini karşılamada kaliteli, hızlı, öncü, güvenilir hizmetler sunarız.

Müşterilerimizden gelen görüşleri tüm yasal yükümlülükler çerçevesinde değerlendiririz.

Müşterileri tam ve zamanında bilgilendirmeye önem verir, bilgilerin net ve anlaşılır olmasına özen gösteririz.

Gelen tüm müşteri başvurularını kayıt altına alarak; Erişilebilirlik, İzlenebilirlik, Objektiflik, Şeffaflık "Müşteri bilgilerinin gizliliği” ilkesine sadık kalarak hizmet verir.

Müşteri Memnuniyeti sistemimizi düzenli aralıklarla gözden geçirerek; müşterilerimiz, çalışanlarımız ve tüm paydaşlarımızın önerileri ile gelişime açık alanları tespit edip, sürekli iyileştirilmesini sağlarız.

Geri bildirimlerin tarafımıza iletilmesi için çeşitli kanallar yaratır ve bu kanalları müşterilerimizle paylaşırız</span>    
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru4-->
<div>
  <button v-b-toggle.collapse-2 style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Sanal mağazadan açık ürün sipariş edebilir miyim?</button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
     <span class="card-text" style="top:5px;position:relative;text-align:initial;"></span> 
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru5-->
<div>
  <button v-b-toggle.collapse-3  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Sanal mağazadan pasta sipariş edebilir miyim?</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;"></span> 
    </b-card>
  </b-collapse>
</div>

</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="Veri Güvenliği">
  <!--Soru1-->
<div>
  <button v-b-toggle.collapse-1  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;" >Gizlilik Politikası</button>
  <b-collapse id="collapse-1" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"   style="top:5px;position:relative;text-align:initial;">
</span>
     
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru2-->
<div>
  <button v-b-toggle.collapse-2  style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;">Kişisel Verilerin korunması kanunu </button>
  <b-collapse id="collapse-2" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
  <span class="card-text"  style="top:5px;position:relative;text-align:initial;"></span>    
    </b-card>
  </b-collapse>
</div>
<br>
<br>
<!--Soru3-->
<div>
  <button v-b-toggle.collapse-3 style= "background: #ccc;border:none;outline:none;text-align:initial;float:left;height:30px;width:800px;"  >Kişisel verilerin korunması kanunu itiraz</button>
  <b-collapse id="collapse-3" class="mt-2" style="height:1px;width:1050px;top:0px;position:relative;border:none;float:left;">
    <b-card>
       <span class="card-text"  style="top:5px;position:relative;text-align:initial;"></span>  
    </b-card>
  </b-collapse>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="İletişim">
  <div style="float:left;">
<h4 style="text-align:initial;font-size:15px;"> <strong>KEP Adresimiz </strong></h4>
<a   style="text-decoration:underline;color:#00ccc2;float:left;"  href="altinkiliclarkahvekakao@hs03.kep.tr">altinkiliclarkahvekakao@hs03.kep.tr.</a>
<br>
<h4 style="text-align:initial;font-size:15px;"> <strong>Mersis No</strong></h4>
<p style="text-align:initial;"> 0063023629000012</p>
<h4 style="text-align:initial;font-size:15px;"> <strong>Kahve Dünyası Müşteri Hattı</strong></h4>
<p style="text-align:initial;"> 0850 393 7070</p>
<h4 style="text-align:initial;font-size:15px;"> <strong>Kahve Dünyası Merkez Ofis</strong></h4>
<p style="text-align:initial;">Ömer Avni Mahallesi, Meclisi Mebusan Caddesi, İnebolu Sokak, Ekemen Han No:1 Kat:4
<strong>Beyoğlu / İstanbul</strong>
</p>
<p style="text-align:initial;" >
  <strong>Telefon</strong> 2525
  <br>
   <strong>Faks</strong> sdfsdfsdf
   <br>
    <strong>E posta</strong> <a href=" info@kahvedunyasi.com" style="text-decoration:underline;color:#00ccc2;"> info@kahvedunyasi.com</a>
</p>
<h4 style="text-align:initial;font-size:15px;"> <strong>Kahve Dünyası Sanal Mağaza</strong></h4>
<p style="text-align:initial;">
  Kahve Dünyası Sanal Mağaza - Selanik Bulvarı, İstanbul Caddesi,
No:11
<strong> Kemerburgaz Eyüp/İstanbul PK:34075 </strong>
</p>
<p style="text-align:initial;">
  <strong>Telefon</strong> 2525
  <br>
   <strong>Faks</strong> sdfsdfsdf
   <br>
    <strong>E posta</strong> <a href=" info@kahvedunyasi.com" style="text-decoration:underline;color:#00ccc2;"> info@kahvedunyasi.com</a>
</p>
<h4 style="text-align:initial;font-size:15px;"> <strong>Sanal Mağaza çalışma saatleri</strong></h4>
<p style="text-align:initial;"> Hafta İçi: 08:00-12:00 ve 13:00-17:00</p>
<p style="text-align:initial;">Cumartesi:  09:00-13:00</p>
</div>
</b-tab>
<!--------------------------------------------------------------------------------------------->
<b-tab title="İletişim Formu">
  <div class="row">
    <h3 style="float:left"><strong>MESAJ YAZ</strong></h3>
    </div>

<div  >
<!--kategori-->
<div class="row">
  <b-form-group id="input-group-1"  label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.kategori"
          :options="kategoriler"
          required
          style="width:330px;height:70px;float:left;"
        ></b-form-select>
        </b-form-group>
        
  </div>
  <p style="color: red;" v-show="kategori_uyari == true">*Kategori gerekmektedir.</p>



<!--konu-->

<div class="row" >
<b-form-group id="input-group-2"  label-for="input-2">
        <b-form-select
          id="input-2"        
          v-model="form.konu"
          :options="konular"
          required
          style="width:330px;height:70px;float:left;outline:none;"
        ></b-form-select>
      </b-form-group>
       
</div>
  <p style=" color: red;" v-show="konu_uyari == true">*Konu gerekmektedir.</p>
 

<!--email-->
<div class="row" >
     <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="tel"
          required
          placeholder="E-mail"
          style="width:330px;height:70px;float:left;"
        ></b-form-input>
      </b-form-group>
</div>

<p style="color: red;" v-show="email_uyari">*Lütfen mail adresinizi girin</p>

     
  <!--ad soyad-->
<div class="row" >
  <b-form-group id="input-group-4"  label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.ad"
          required
          placeholder="Ad-Soyad"
          style="width:330px;height:70px;float:left;"
        ></b-form-input>
      </b-form-group>
        
</div>
<p style=" color: red;" v-show="ad_soyad_uyari">*Lütfen adınızı girin</p>

<!--telefon-->
<div class="row" >
     <b-form-group id="input-group-5"  label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.telefon"
          type="tel"
          required
          placeholder="Telefon"
          style="width:330px;height:70px;float:left;"
        ></b-form-input>
      </b-form-group>
</div>

<p style="color: red;" v-show="telefon_uyari">*Telefon alanınız gerekli</p>
<!--mesajınızı yazın-->
<div class="row">
  <b-form-group id="input-group-6"  label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.mesaj"
          type="text"
          required
          placeholder="Mesajınızı yazın"
          style="width:330px;height:70px;float:left;"
        ></b-form-input>
      </b-form-group>
      <p style="position:absolute;bottom:-5px;font-size:10px;"><strong>1000 karakter kaldı</strong></p>
        
      </div>  
        <button @click.prevent="gonder" type="submit" class="giris_butonu">GÖNDER
          <i class="fa fa-long-arrow-right"></i>
        </button>
      <p style=" color: red;" v-show="mesaj_uyari">*Mesaj alanınız gerekli</p> 
       
      
</div>



</b-tab>
</b-tabs>
</b-card>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          ad: '',
          telefon:'',
          mesaj:'',
          kategori: null,
          konu:null,
          checked: [],
          kategori_uyari: false,
          konu_uyari:false,
      
        },
        email_uyari: false,
        ad_soyad_uyari:false,
        telefon_uyari:false,
        mesaj_uyari:false,
        kategoriler: [{ text: 'Kategori', value: null }, 'Mağazalar Hakkında', 'Kahve Dünyası Hakkında', 'Kurumsal Satış ve Horeca'],
        konular: [{ text: 'Konu', value: null }, 'Şikayet', 'Soru', 'Öneri' ,'Memnuniyet'],
        show: true
      }
    },
    methods: {
            gonder()
            {
              if(this.form.kategori == null){
                this.kategori_uyari=true;
              }
               if(this.form.konu == null){
                this.konu_uyari=true;
              }
              if(this.form.email == '')
              {
                this.email_uyari=true;
              }
              if(this.form.ad == '')
              {
                this.ad_soyad_uyari=true;
              }
                if(this.form.telefon == '')
              {
                this.telefon_uyari=true;
              }
                if(this.form.mesaj == '')
              {
                this.mesaj_uyari=true;
              }
            },

      

    }
  }
</script>

<style scoped>

.giris_butonu
{
  background-color:#005e5c;
  color:white;
  font-weight:5px;
  border-radius:0px;
  width:120px;
  height:55px;
  position:absolute;
  left:280px;
outline:none;
border:none;
}
.giris_butonu :hover
{
 background:#00ccc2;
}

</style>