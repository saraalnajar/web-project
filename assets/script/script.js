
document.addEventListener("DOMContentLoaded", function () {
    let searchForm = document.querySelector('form'); 
   
    let type=[{buy:"للبيع"},{rent:"للإيجار"}];
    let propertyTypes = [{apartments:"شقق"}, {furnishedApartments:"شقق مفروشة"}, {villa:"فلل"}, {Lands:"أراضي"},{commercial: "تجاري"}];
    let city =[{Amman:"عمان"},{Irbid:"اربد"},{Zarqa:"الزرقاء"},{Mafraq:"المفرق"},{Ajloun:"عجلون"},{Jerash:"جرش"},{Madaba:"مادبا"},{Balqa:"البلقاء"},{Karak:"كرك"},{Tafileh:"الطفيلة"},{Maan:"معان"},{Aqaba:"العقبة"}];
     populateDropdown('type', type,'النوع');
   populateDropdown('propertyType', propertyTypes,'نوع العقار');
    populateDropdown('cities', city,'المحافظة');
  
    searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let  searchType= document.querySelector('select[name="type"]').value;
    let searchPropertType = document.querySelector('select[name="propertyType"]').value;
    let  searchCities= document.querySelector('select[name="cities"]').value;
    if (searchType.trim() === '' && searchPropertType.trim() === '' && searchCities.trim() === '') {
      alert('الرجاء اختيار واحد على الأقل من اختيارات الفلترة');
      return; 
    }
  
    alert(' انت تبحث عن عقارات بالمواصفات التالية: \n' + getTypeText(type,searchType)  + getTypeText(propertyTypes,searchPropertType) + getTypeText(city,searchCities));
  });
  function getTypeText(options, value) {
    if (value.trim() === '') {
      return '';
    }
  
    const foundItem = options.find(item => item[value]);
    return foundItem ? foundItem[value] + ' ': '';
  }
    function populateDropdown(name, options, defaultText) {
      let dropdown = document.querySelector('select[name="' + name + '"]');
  
      dropdown.innerHTML = '';
  
      let defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = defaultText;
      dropdown.appendChild(defaultOption);
      for (let option of options) {
    
    for (let [key, value] of Object.entries(option)) {
      let newOption = document.createElement('option');
        newOption.value = key;
        newOption.textContent = value;
        dropdown.appendChild(newOption);  }
  }
  
    }
  });
  