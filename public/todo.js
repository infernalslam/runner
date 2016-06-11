/* global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var app = this
    app.title = 'แบบบันทึกการทดสอบสมถรรภาพทางกายนักเรียนโรงเรียนสตรีวิทยา ปีการศึกษา2559'
    app.Math = window.Math
    app.BMI = function (data) {
      var num = data.toString()
      var totalBMI = num.substring(0, 5)
      return totalBMI // bni number
    }
    // app.sit(sitData)
    app.showSit = ''
    app.sit = function (age, sit) {
      if (age === 13 || age === 12) {
        if (sit >= 14) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 11 && sit <= 13) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 8 && sit <= 10) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 5 && sit <= 7) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 4) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 13
      if (age === 14) {
        if (sit >= 17) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 13 && sit <= 16) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 9 && sit <= 12) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 5 && sit <= 8) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 4) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 14
      if (age === 15) {
        if (sit >= 18) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 14 && sit <= 17) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 10 && sit <= 13) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 6 && sit <= 9) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 5) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 15
      if (age === 16) {
        if (sit >= 18) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 14 && sit <= 17) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 10 && sit <= 13) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 6 && sit <= 9) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 5) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 16
      if (age === 17) {
        if (sit >= 19) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 15 && sit <= 18) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 11 && sit <= 14) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 7 && sit <= 10) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 6) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 17
      if (age === 18) {
        if (sit >= 20) {
          app.showSit = 'ดีมาก'
          return 'ดีมาก'
        }
        if (sit >= 16 && sit <= 19) {
          app.showSit = 'ดี'
          return 'ดี'
        }
        if (sit >= 12 && sit <= 15) {
          app.showSit = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (sit >= 8 && sit <= 11) {
          app.showSit = 'ต่ำ'
          return 'ต่ำ'
        }
        if (sit <= 7) {
          app.showSit = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age = 18
    }
    app.run = function (age, run) {
      // console.log(age, run)
      if (age === 12 || age === 13) {
        if (run >= 44) {
          app.showRun = 'ดีมาก'
          return 'ดีมาก'
        }
        if (run >= 34 && run <= 43) {
          app.showRun = 'ดี'
          return 'ดี'
        }
        if (run >= 24 && run <= 33) {
          app.showRun = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (run >= 14 && run <= 23) {
          app.showRun = ''
          return 'ต่ำ'
        }
        if (run <= 13) {
          app.showRun = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 12-13
      if (age === 14 || age === 15) {
        if (run >= 45) {
          app.showRun = 'ดีมาก'
          return 'ดีมาก'
        }
        if (run >= 35 && run <= 44) {
          app.showRun = 'ดี'
          return 'ดี'
        }
        if (run >= 25 && run <= 34) {
          app.showRun = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (run >= 15 && run <= 24) {
          app.showRun = ''
          return 'ต่ำ'
        }
        if (run <= 14) {
          app.showRun = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 14
      if (age === 16) {
        if (run >= 46) {
          app.showRun = 'ดีมาก'
          return 'ดีมาก'
        }
        if (run >= 36 && run <= 45) {
          app.showRun = 'ดี'
          return 'ดี'
        }
        if (run >= 26 && run <= 35) {
          app.showRun = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (run >= 16 && run <= 25) {
          app.showRun = ''
          return 'ต่ำ'
        }
        if (run <= 15) {
          app.showRun = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 16
      if (age === 17 || age === 18) {
        if (run >= 47) {
          app.showRun = 'ดีมาก'
          return 'ดีมาก'
        }
        if (run >= 37 && run <= 46) {
          app.showRun = 'ดี'
          return 'ดี'
        }
        if (run >= 27 && run <= 36) {
          app.showRun = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (run >= 17 && run <= 26) {
          app.showRun = ''
          return 'ต่ำ'
        }
        if (run <= 16) {
          app.showRun = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 17-18
    }
    app.pus = function (age, pus) {
      if (age === 12) {
        if (pus >= 27) {
          app.showPus = 'ดีมาก'
          return 'ดีมาก'
        }
        if (pus >= 22 && pus <= 26) {
          app.showPus = 'ดี'
          return 'ดี'
        }
        if (pus >= 17 && pus <= 21) {
          app.showPus = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (pus >= 12 && pus <= 16) {
          app.showPus = 'ต่ำ'
          return 'ต่ำ'
        }
        if (pus <= 11) {
          app.showPus = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 12
      if (age === 13 || age === 14) {
        if (pus >= 30) {
          app.showPus = 'ดีมาก'
          return 'ดีมาก'
        }
        if (pus >= 24 && pus <= 29) {
          app.showPus = 'ดี'
          return 'ดี'
        }
        if (pus >= 18 && pus <= 23) {
          app.showPus = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (pus >= 12 && pus <= 17) {
          app.showPus = 'ต่ำ'
          return 'ต่ำ'
        }
        if (pus <= 11) {
          app.showPus = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 13
      if (age === 15 || age === 16 || age === 17 || age === 18) {
        if (pus >= 33) {
          app.showPus = 'ดีมาก'
          return 'ดีมาก'
        }
        if (pus >= 26 && pus <= 32) {
          app.showPus = 'ดี'
          return 'ดี'
        }
        if (pus >= 19 && pus <= 25) {
          app.showPus = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (pus >= 12 && pus <= 18) {
          app.showPus = 'ต่ำ'
          return 'ต่ำ'
        }
        if (pus <= 11) {
          app.showPus = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      } // age 15-18
    }
    app.runBack = function (age, runback) {
      console.log(age, runback)
      if (age === 12) {
        if (runback <= 17.87) {
          app.runback = 'ดีมาก'
          return 'ดีมาก'
        }
        if (runback >= 17.88 && runback <= 20.66) {
          app.runback = 'ดี'
          return 'ดี'
        }
        if (runback >= 20.67 && runback <= 23.45) {
          app.runback = 'ปานกลาง'
          return 'ปานกลาง'
        }
        if (runback >= 23.46 && runback <= 26.24) {
          app.runback = 'ต่ำ'
          return 'ต่ำ'
        }
        if (runback >= 26.25) {
          app.runback = 'ต่ำมาก'
          return 'ต่ำมาก'
        }
      }
    }
  })
