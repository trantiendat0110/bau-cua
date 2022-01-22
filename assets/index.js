const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const img1 = $('.img1')
const img2 = $('.img2')
const img3 = $('.img3')
const randomBtn = $('.randomBtn')
const bets = $$('.bet')
const win = $('.win')
const lost = $('.lost')
const myCoin = $('.myCoin p')
const audio = $('.audio')
const coins = $$('.coin')






const app = {
    isIndex: -1,
    isRD1: 0,
    isRD2: 0,
    isRD3: 0,
    imgs: [
        './assets/img/bau.jpeg',
        './assets/img/ca.jpg',
        './assets/img/cua.jpg',
        './assets/img/ga.jpg',
        './assets/img/nai.jpg',
        './assets/img/tom.jpg',
    ],
    handleEvent: () => {
        // click random
        randomBtn.onclick = () => {
            if (app.isIndex < 0) {
                alert('Chưa có lựa chọn của bạn !')
            }
            else {
                setTimeout(() => {
                    app.bonusPunish()
                    app.isIndex = - 1
                }, 2000)
                app.randomImg()
            }
        }
        // click đặt cược
        bets.forEach((bet, index) => {
            bet.onclick = (e) => {
                if ($('.active')) {
                    $('.active').classList.remove('active')
                }
                bet.classList.add('active')
                app.isIndex = index
            }
        })
        // active coin
        coins.forEach((coin, index) => {
            coin.onclick = () => {
                if ($('.activeCoin')) {
                    $('.activeCoin').classList.remove('activeCoin')
                }
                coin.classList.add('activeCoin')
            }
        })

    },
    youWin: () => {
        let total = Number($('.coinValue').innerText)
        let count = Number($('.activeCoin').innerText)
        total = total + count
        $('.coinValue').innerText = String(total)
    },
    youLost: () => {
        let total = Number($('.coinValue').innerText)
        let count = Number($('.activeCoin').innerText)
        total = total - count
        $('.coinValue').innerText = String(total)
    },
    randomImg: () => {
        
            setTimeout(() => {
                $('.active').classList.remove('active')
            }, 3000),
            setTimeout(() => {
                $('.activeCoin').classList.remove('activeCoin')
            }, 3000),
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 300)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 400)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 500)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 600)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 700)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 800)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 900)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 1000)
            setTimeout(() => {
                app.isRD1 = Math.floor(Math.random() * 6)
                app.isRD2 = Math.floor(Math.random() * 6)
                app.isRD3 = Math.floor(Math.random() * 6)
                img1.setAttribute('src', app.imgs[app.isRD1])
                img2.setAttribute('src', app.imgs[app.isRD2])
                img3.setAttribute('src', app.imgs[app.isRD3])
            }, 1500)            
    },
    bonusPunish:() => {
        if(app.isIndex == app.isRD1 || app.isIndex == app.isRD2 || app.isIndex == app.isRD3) 
        {
            win.classList.add('showWinLost')
            setTimeout(() => {
            win.classList.remove('showWinLost')
            }, 4800)
            audio.setAttribute('src', './assets/video/Tieng-vo-tay-tra-loi-dung-www_tiengdong_com.mp3')
            audio.play()
            app.youWin()
            // bonus coin 
            
        }
        else {
            lost.classList.add('showWinLost')
            setTimeout(() => {
                lost.classList.remove('showWinLost')
            }, 4800)
            audio.setAttribute('src', './assets/video/Am-thanh-tra-loi-sai-www_tiengdong_com.mp3')
            audio.play()
            app.youLost()
        }
    },
    
    start: () => {
        app.handleEvent()
    },

}
app.start();