import { screen, render } from "@testing-library/react";
import Post from ".";

describe('Teste do componente Post', () => {
    test('Deve renderizar corretamente na tela', () => {
        render(
            <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
                Teste
            </Post>
        )
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })
})
