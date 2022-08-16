
// limittime
const limitYearEl = document.querySelector('.box_year')
isYearOptionExisted = false;
limitYearEl.addEventListener('focus', function() {
    if(!isYearOptionExisted) {
        isYearOptionExisted = true;
        for(var i = 2022; i <= 2050; i++) {
            const YearOption = document.createElement('option')
            YearOption.setAttribute('value', i)
            YearOption.innerText = i
            this.appendChild(YearOption);
        }
    }
});

const limitMonthEl = document.querySelector('.box_month')
isMonthOptionExisted = false;
limitMonthEl.addEventListener('focus', function() {
    if(!isMonthOptionExisted) {
        isMonthOptionExisted = true;
        for(var i = 1; i <= 12; i++) {
            const MonthOption = document.createElement('option')
            MonthOption.setAttribute('value', i)
            MonthOption.innerText = i
            this.appendChild(MonthOption);
        }
    }
});

const limitDayEl = document.querySelector('.box_day')
isDayOptionExisted = false;
limitDayEl.addEventListener('focus', function() {
    if(!isDayOptionExisted) {
        isDayOptionExisted = true;
        for(var i = 1; i <= 31; i++) {
            const DayOption = document.createElement('option')
            DayOption.setAttribute('value', i)
            DayOption.innerText = i
            this.appendChild(DayOption);
        }
    }
});

$("#upload_file").on('change', function(){
    var fileName = $("#upload_file").val();
    $(".upload_name").val(fileName);
});

