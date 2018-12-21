export default {
    name: "Tile",
    props: ['id', 'name', 'type'],
    methods: {
        open: function () {
            switch (this.type) {
                case 'dashboard': {
                    this.$router.push({ name: "dashboards", params: { id: this.id } })
                    break;
                }
                case 'playground': {
                    this.$router.push({ name: "playgrounds", params: { id: this.id } })
                    break;
                }
                default: {
                    alert("Error!")
                    break;
                }
            }
        }
    }
}