class DOS_Detector extends EventEmitter {
      constructor(timeValue){
          super();  
          this.urls = new Map();
          this.TIME_BETWEEN_CALLS = timeValue;   
      }   
      addUrl = (url) => {
          const time = new Date().getTime()
          if(this.urls.has(url)){       
              const deltaTime = time - this.urls.get(url) 
              if(deltaTime < this.TIME_BETWEEN_CALLS){         
                  this.emit("DosDetected", {
                      url:url,
                      deltaTime: deltaTime
                  })
              }     
          }     
          this.urls.set(url,time);
      }
} 
  
  const DOS_Detector = require('./dosDetector')
  const detector = new DOS_Detector(3000);
  detector.on('DosDetected', ({url, deltaTime}) => {
      console.log(`DosDetected!! -> url: ${url} - Time Between: ${deltaTime}`)
  })
  