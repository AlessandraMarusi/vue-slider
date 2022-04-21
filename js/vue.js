const app = new Vue({
        el:'#app',
        data: {
            items: [
                {
                    immagine: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            
                },
                {
                    immagine: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    immagine: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            
                },
                {
                    immagine: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            
                },
                {
                    immagine: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                }
            ],
            currentIndex: 0,
            intervalId: null,
            isActive: true,
            isHidden: false,
        },
        methods: {
            activeTrue(){
                isActive = true;
            },
            slideDown(){
                this.isActive = false;
                this.currentIndex = (this.currentIndex === 4) ? 0 : this.currentIndex += 1;
                setTimeout(() => {this.isActive = true}, 0);
            },
            slideUp(){
                this.currentIndex = (this.currentIndex === 0) ? 4 : this.currentIndex -= 1;
            },
            changeOnClick(thumb, index){
                isHidden = true;
                isActive = false;
                this.currentIndex = index
                isHidden = false;
                isActive = true;
            },
            autoScroll(){
                this.intervalId = setInterval(()=>{this.slideDown()},3000)
            },
            stopAutoScroll(){
                clearInterval(this.intervalId);
                this.intervalId = null;
            },
        },
        mounted(){
            this.autoScroll();
        }
    }
);