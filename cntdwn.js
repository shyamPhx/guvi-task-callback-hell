function cntdwn(){
  setTimeout(()=>{
    document.getElementById('screen').innerHTML = `10`;
    setTimeout(()=>{
      document.getElementById('screen').innerHTML = `9`;
      setTimeout(()=>{
        document.getElementById('screen').innerHTML = `8`;
        setTimeout(()=>{
          document.getElementById('screen').innerHTML = `7`;
          setTimeout(()=>{
            document.getElementById('screen').innerHTML = `6`;
            setTimeout(()=>{
              document.getElementById('screen').innerHTML = `5`;
              setTimeout(()=>{
                document.getElementById('screen').innerHTML = `4`;
                setTimeout(()=>{
                  document.getElementById('screen').innerHTML = `3`;
                  setTimeout(()=>{
                    document.getElementById('screen').innerHTML = `2`;
                    setTimeout(()=>{
                      document.getElementById('screen').innerHTML = `1`;
                      setTimeout(()=>{
                        document.getElementById('screen').innerHTML = `  `;
                        setTimeout(()=>{
                          document.getElementById('text').innerHTML = `Happy Independance day`;
                        })
                      },1000)
                    },1000)
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)

  },1000)
}