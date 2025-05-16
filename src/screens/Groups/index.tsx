import { Header } from '@components/Header';
import { Container } from './styles';
import { Loading } from '@components/Loading'; // ajuste o caminho conforme sua estrutura
import  { Highlight} from '@components/Highlight'
import  { GroupCard} from '@components/GroupCard'
export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight
      title="Turmas"
      subtitle="Jogue Com a sua Turma"
      />
      <GroupCard
      
      title="Galera do Ignite" 
      />
    </Container>
  );
}
