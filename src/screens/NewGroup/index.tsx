import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';

export function NewGroup() {
    return (
        <>
            <Container>
                <Header showBackButton />
                <Content>
                    <Icon />
                    <Highlight 
                     title=" Nova Turma "
                     subtitle="Crie a turma para Adicionar  as Pessoas"
                    />
                </Content>
            </Container>

        </>
    );
}
