import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/input/input';

export function NewGroup() {
    console.log("Alteração real no código");
git add .
git commit -m "recriando repositório"

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight 
                    title="Nova Turma"
                    subtitle="Crie a turma para Adicionar as Pessoas"
                />
                < Input/>
                <Button 
                    title="Criar"
                    style={{ marginTop: 20}}
                />
            </Content>
        </Container>
    );
}
