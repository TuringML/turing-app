import Header from '../../components/header/Header'
import Tile from '../../components/tile/Tile'

export default {
    name: "Home",
    components: {
        Header,
        Tile
    },
    data() {
        return {
            dashboards: [
                { id: 1, name: 'Foo', type: 'dashboard' },
                { id: 2, name: 'Bar', type: 'dashboard' }
            ],
            playgrounds: [
                { id: 1, name: 'Foo', type: 'playground' },
                { id: 2, name: 'Bar', type: 'playground' }
            ],
        }
    }

}