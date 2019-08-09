import { connect } from 'react-redux';
import Home from './Home';
import { getCocktails } from '../../redux/reducers/session/actions';

const mapDispatchToProps = {
  getCocktails
}

const mapStateToProps = ({ session }) => ({
  cocktailsData: session.cocktails.data,
  cocktailsPending: session.cocktails.pending,
  cocktailsError: session.cocktails.error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
