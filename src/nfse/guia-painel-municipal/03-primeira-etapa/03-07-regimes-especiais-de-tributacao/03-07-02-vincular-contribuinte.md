# 3.7.2 Vincular Contribuinte ao Regime Especial de Tributação selecionado

Ao clicar no botão “+ Incluir”, o painel exibirá uma janela para inclusão do CPF/CNPJ a ser vinculado.

![Figura 91 – Tela para inclusão de contribuinte em regime de tributação especial](../../img/fig-p091-1.png)

*Figura 91 – Tela para inclusão de contribuinte em regime de tributação especial.*

## 3.7.2.1 Upload de Arquivo de Regimes Especiais de Tributação

A funcionalidade permite em um único procedimento incluir as informações de um ou mais contribuintes. As regras gerais estão descritas no site web da funcionalidade.

Ao clicar no botão “Importar”, o painel exibirá uma janela para o upload do arquivo no formato descrito abaixo:

<!-- p.92 -->
![Figura 92 – Tela para inclusão de contribuinte em regime de tributação especial via arquivo](../../img/fig-p092-1.png)

*Figura 92 – Tela para inclusão de contribuinte em regime de tributação especial via arquivo.*

1. Todos os campos do arquivo de entrada do arquivo CSV devem estar preenchidos, conforme leiaute do arquivo CSV.

   `<CPF/CNPJ>|<IndicadorDaManutenção>|<Data>|<IdentificadorLegislação>|`

   - a. `<CPF/CNPJ>` - 14 dígitos (preencher com 000 à esquerda quando se tratar de um CPF);
   - b. `<IndicadorDaManutenção>` - 0 - Finalizar Vigência; 1 - Iniciar Vigência;
   - c. `<Data>` - Formato da data DD-MM-AAAA;
   - d. `<IdentificadorLegislação>` - 14 digitos;

2. O arquivo CSV com o resultado do processamento ficará disponível para download na mesma tela de upload. Este arquivo conterá as mesmas informações linha a linha acrescidas com a mensagem do resultado do processamento.
3. A data informada deve ser maior ou igual à data de início da parametrização.
4. Verificar se já existe CPF/CNPJ cadastrado na parametrização. Se não existir é possível cadastrar nova vigência. Se já existir, deve-se verificar se o registro possui data final de vigência preenchido. Se existir data final de vigência, então pode-se ser incluída uma nova vigência para o registro. Se não existir data final de vigência, então pode-se apenas finalizar a vigência do registro nesta parametrização, desde que a data informada no upload deste registro seja maior que a data de final de vigência do último registro de parametrização deste CPF/CNPJ.
5. Pode haver mais de um registro por CPF/CNPJ em um mesmo arquivo CSV, ressaltando que o processamento será realizado na sequência em que os registros forem listados no arquivo.
6. O upload dos beneficiários via CSV deve estar disponível antes e depois da ativação do município no Painel Municipal.
7. Manutenção da parametrização a ser realizada:

   - 0 - Finalizar Vigência;
   - 1 - Iniciar Vigência;

8. Verificar se o identificador da legislação pertence ao município que está realizando a manutenção da parametrização. (Verificar se os 7 primeiros dígitos do identificador da legislação correspondem ao código do município informado).

- A extensão do arquivo obrigatoriamente deve ser .CSV.
- O arquivo deve conter um registro por linha.
- Os campos que compõem cada linha devem ser separados por Pipe ( | ).
- O tamanho do arquivo deve ser de até 300 Kb (cerca de 2000 contribuintes).
- Para informações detalhadas, consulte o leiaute nas opções abaixo.

<!-- p.93 -->
Os municípios devem cadastrar os regimes uma única vez e incluir os contribuintes que estão cobertos por aquele regime.

Para os regimes Específicos municipais – município deve instruir que o contribuinte coloque na descrição do serviço qual o regime que está incluído.

## 3.7.3.1 Exclusão da configuração dos Regimes Especiais de Tributação

Nesta etapa, caso tenha sido configurado com erro algum dos regimes, é possível excluir a configuração feita e refazê-la desde o início.

Ao clicar nos 3 pontos, abre a opção “Excluir”:

<!-- p.94 -->
![Figura 93 – Exclusão de contribuinte em regime de tributação especial via arquivo](../../img/p086-124-fig-p094-93.png)

*Figura 93 – Exclusão de contribuinte em regime de tributação especial via arquivo.*

Ao clicar em excluir, abrirá uma janela para confirmação:

![Figura 94 – Tela de confirmação da exclusão de contribuinte em regime de tributação especial](../../img/p086-124-fig-p094-94.png)

*Figura 94 – Tela de confirmação da exclusão de contribuinte em regime de tributação especial.*
