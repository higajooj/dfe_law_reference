<!-- p.91 -->

# 4.2.4 Emitir NFS-e

Após as configurações feitas acima, para os serviços cadastrados como "favoritos", é possível a Emissão Simplificada da NFS-e.

![Lista de serviços favoritos para emissão simplificada (p. 91)](../../img/fig-p091-012.png)

Será apresentado um formulário simplificado para preenchimento de três informações: Identificador do cliente (o tomador/adquirente do serviço), Serviço prestado (o Código de Tributação Nacional do serviço, mas que será apresentado na lista conforme apelido dos "Serviços Favoritos" previamente cadastrados) e Valor do serviço prestado.

![Formulário de emissão simplificada (p. 91)](../../img/fig-p091-013.png)

Para quase todos os serviços prestados, estes campos serão suficientes para a emissão simplificada para contribuintes MEI.

Caso o serviço prestado seja uma obra ou atividade de evento, o sistema solicitará informações adicionais de preenchimento que identificarão a obra ou seu local de execução para obras; e datas inicial/final e o identificador ou seu local de execução no caso de atividade de evento.

<!-- p.92 -->

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CPF/CNPJ do Cliente | Informação sobre o CPF/CNPJ do tomador/adquirente | Numérico | Obrigatório | Incluir o CPF/CNPJ do tomador/adquirente. Pode-se recuperar os dados dos últimos tomadores/adquirentes clicando em (ícone). |
| Nome/Razão Social do Cliente | Informação sobre o Nome/Razão Social do Cliente | Texto | Obrigatório | Preenchimento automático pelo sistema com busca no cadastro CPF/CNPJ |
| Serviço Prestado | Informação sobre o serviço prestado. A lista exibe os serviços favoritos previamente cadastrados. Obs: caso deseje-se adicionar algum serviço à lista, basta cadastrar "novo serviço" na funcionalidade de "Serviços Favoritos", item 4.2.3. acima. | Combo | Obrigatório | Selecionar um serviço prestado da lista |
| Descrição do Serviço | Campo acionado se clicar no editar (canto direito) do campo "Serviço Prestado". O texto informado neste campo será utilizado somente na emissão da NFS-e que está sendo emitida. Não altera o texto cadastrado no "Serviço Favorito". | Texto | Opcional | Editar ou complementar o texto salvo na descrição do serviço quando cadastrado como "Serviço Favorito" |
| Valor do serviço prestado | Informação sobre o valor total cobrado pelo serviço prestado, em moeda nacional. | Valor | Obrigatório | Incluir valor total do serviço, em reais. |

<!-- p.93 -->

## Serviço – Informações para Obra (Subitens 7.02 e 7.05)

Quando a emissão da NFS-e refere-se a serviço de obra, alguns campos adicionais devem ser informados.

O primeiro deles é marcar a opção se vai ser informado o Código de obra ou Endereço no Brasil. Conforme a opção marcada, o sistema exibirá campos diferentes a serem preenchidos.

![Seleção entre Código de Obra e Endereço no Brasil (p. 93)](../../img/fig-p093-015.png)

**Opção: Código de Obra**

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Código da Obra | Informação sobre o número de identificação da obra | Texto | Obrigatório | Incluir o código da obra |

![Campos da opção Código de Obra (p. 93)](../../img/fig-p093-016.png)

<!-- p.94 -->

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Município onde o serviço foi prestado | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | Selecionar um dos municípios disponibilizados na lista |

**Opção: Endereço no Brasil**

![Campos da opção Endereço no Brasil (p. 94)](../../img/fig-p094-018.png)

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CEP | Informação do Código de endereçamento postal no Brasil | Numérico | Obrigatório | Informar o CEP do local da obra. |
| Município | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | Recupera as informações de Município na tabela TOM com o CEP informado |
| Bairro | Informação do nome do bairro | Texto | Obrigatório | Recupera as informações de logradouro na tabela TOM com o CEP informado |
| Logradouro | Informação do nome do logradouro | Texto | Obrigatório | Recupera as informações de logradouro na tabela TOM com o CEP informado |
| Número | Informação do número do logradouro | Texto | Obrigatório | Incluir o número do logradouro |

![Endereço da obra preenchido (p. 94)](../../img/fig-p094-019.png)

<!-- p.95 -->

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Complemento | Informação do complemento do logradouro | Texto | Opcional | Incluir o complemento do logradouro |

## Serviço – Informações para Atividades de Eventos (subitens do item 12 - Serviços de diversões, lazer, entretenimento e congêneres)

Quando o serviço favorito cadastrado é um serviço constante dos subitens do item 12 do código de tributação nacional, serão exibidos alguns campos sobre o endereço do evento.

![Campos de atividade de evento (p. 95)](../../img/fig-p095-020.png)

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Data Inicial | Data em que se iniciou a prestação do serviço | Data | Obrigatório | Incluir a data de início do serviço |
| Data Final | Data em que se foi ou será concluída a prestação do serviço | Data | Obrigatório | Incluir a data final do serviço |

**Opção: Identificador**

![Opção Identificador de atividade de evento (p. 95)](../../img/fig-p095-021.png)

![Campo de identificador do evento (p. 95)](../../img/fig-p095-022.png)

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Identificador do Evento | Código identificador da atividade do evento determinado pela Administração Tributária | Código | Opcional | Incluir código de identificação da atividade do evento |
| Município onde o serviço foi prestado | Informação do nome do município no qual a atividade de evento ocorreu | Texto | Obrigatório | Selecionar um dos municípios disponibilizados na lista |

![Campos de identificação do evento (p. 95)](../../img/fig-p095-023.png)

![Campos de identificação do evento, continuação (p. 95)](../../img/fig-p095-024.png)

<!-- p.96 -->

**Opção: Endereço no Brasil**

![Campos da opção Endereço no Brasil para evento (p. 96)](../../img/fig-p096-025.png)

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CEP | Informação do Código de endereçamento postal no Brasil | Numérico | Obrigatório | Informar o CEP do local do evento |
| Município | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | Recupera as informações de Município na tabela TOM com o CEP informado |
| Bairro | Informação do nome do bairro | Texto | Obrigatório | Recupera as informações de logradouro na tabela TOM com o CEP informado |
| Logradouro | Informação do nome do logradouro | Texto | Obrigatório | Recupera as informações de logradouro na tabela TOM com o CEP informado |
| Número | Informação do número do logradouro | Texto | Obrigatório | Incluir o número do logradouro |
| Complemento | Informação do complemento do logradouro | Texto | Opcional | Incluir o complemento do logradouro |

Após o preenchimento dos dados obrigatórios, conforme o serviço prestado, deve-se clicar no ícone <!-- REVISAR p.96: ícone ausente no texto extraído -->.
