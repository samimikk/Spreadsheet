export default {
        props: ['title','prestige','altTitle','name'],
        data() {
            return {
                checked: false,
                id: "",
                value: 0
            }
        },
        mounted() {
            if (this.altTitle === undefined) {
                this.id = this.getId(this.title);
            } else {
                this.id = this.getId(this.altTitle);
            }
        },
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
                this.value = Number(this.prestige);
                this.$emit('add-prestige',this.value, this.checked)
            }
        }
}