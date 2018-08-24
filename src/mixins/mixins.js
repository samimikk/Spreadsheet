

export default {
        props: ['title','prestige','altTitle','name'],
        data() {
            return {
                checked: false,
                id: "",
                prestigeAmoumt: 0,
                isActive: true,
                value: false
            }
        },
        mounted() {
            if (this.altTitle === undefined) {
                this.id = this.getId(this.title);
            } else {
                this.id = this.getId(this.altTitle);
            }
        },
        computed: {},
        methods: {
            getId(title) {
                let str = "";
                str = this.camelCase(title);
                str = this.convertSpecialChars(str);

                return str;
            },
            camelCase(s) {
                let rx = /\s([a-z])/g;
                if ( s === s.toUpperCase() ) s = s.toLowerCase();
                return s.replace(rx, function(a, b){
                    return b.toUpperCase();
                });
            },
            convertSpecialChars(s) {
                s = s.replace(/ä/g, 'a');
                s = s.replace(/ö/g, 'o');
                s = s.replace(/Ä/g, 'A');
                s = s.replace(/Ö/g, 'O');

                return s;
            },
            addPrestige() {
                this.prestigeAmoumt = Number(this.prestige);
                this.$emit('add-prestige',this.prestigeAmoumt, this.checked)

                var elem = document.getElementById(this.id)
                if (elem.classList.contains('radio')) {
                    const container = document.getElementById('app');
                    const wrappers = container.querySelectorAll('.selection--radio');
                    for (let i=0;i<wrappers.length;i++) {
                        wrappers[i].classList.remove('active');
                    }
                    elem.parentElement.parentElement.classList.add('active');
                }




            }
        }
}