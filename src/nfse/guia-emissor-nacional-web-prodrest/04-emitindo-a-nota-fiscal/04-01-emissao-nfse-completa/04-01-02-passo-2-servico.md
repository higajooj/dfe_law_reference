<!-- p.43 -->

# 4.1.2 PASSO 2 – Serviço

![Figura 4.1.2-1 – Tela do PASSO 2 – Serviço](../../img/fig-p043-1.png)

![Tela do PASSO 2 – Serviço (parte inferior)](../../img/p043-086-fig-p043-002.png)


*Figura 4.1.2-1 – Tela do PASSO 2 – Serviço.*

Tela para preenchimento do(s) serviço(s) prestado(s) pela pessoa física ou jurídica emitente da NFS-e.

A obrigatoriedade dos campos da tabela, bem como as regras de negócio aplicadas para cada um deles, estão dispostas na planilha de leiaute DPS e RN DPS descrita abaixo. Após o preenchimento dos campos, clicar em **Avançar**.

<!-- p.44 -->

## Local do fornecimento/prestação do serviço

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| País | Informação sobre o país onde ocorreu a conclusão do serviço prestado | Combo | Obrigatório | Selecionar um dos países da lista constantes da `TAB.PAIS_ISO2` do `Anexo_A-Municipio_IBGE-Paises_ISO2-V1.00-Snnfse-20251210`. |
| Município | Informação sobre o município onde ocorreu a conclusão do serviço prestado, quando o serviço for prestado no Brasil. | Combo | Obrigatório | Caso o país informado para a prestação do serviço seja “Brasil”, selecionar o município (digite pelo menos 3 caracteres para realizar a busca), onde ocorreu a conclusão do serviço prestado. |

## Serviço/fornecimento prestado

Alguns campos relativos ao serviço/fornecimento prestado somente serão disponibilizados dependendo do Código de Tributação Nacional informado.

Caso o Código de Tributação Nacional seja um dos casos de preenchimento obrigatório do Local da Prestação do serviço, **deve-se informar o Tomador/Adquirente do serviço** e o sistema exibirá a seguinte mensagem:

![Figura 4.1.2-2 – Mensagem de confirmação para informar o tomador do serviço](../../img/fig-p044-1.png)

*Figura 4.1.2-2 – Mensagem de confirmação para informar o tomador do serviço.*

Informando “Sim”, o sistema exibirá uma tela para inclusão dos dados do Tomador/Adquirente, a ser preenchido conforme explicado no passo anterior (Pessoas):

<!-- p.45 -->

![Figura 4.1.2-3 – Janela Incluir/Editar tomador do serviço](../../img/fig-p045-1.png)

*Figura 4.1.2-3 – Janela Incluir/Editar tomador do serviço.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Código de Tributação Nacional | Informação sobre o Código de Tributação Nacional do serviço prestado. | Combo | Obrigatório | Selecionar o Código de Tributação Nacional constante do `Anexo_B-Nbs2-Lista_Servico_Nacional-Snnfse-V1.01-20260122` (digite pelo menos 3 caracteres para realizar a busca). |
| Código Complementar do Município (Caso o município tenha criado códigos complementares) | Informação sobre o Código Complementar Municipal do serviço prestado. | Combo | Obrigatório | Selecionar o código complementar dentre as opções listadas. |
| O serviço prestado é um caso de: imunidade, exportação de serviço ou não incidência do ISSQN?<br>![Campo “O serviço prestado é um caso de…”](../../img/p043-086-fig-p045-006.png) | Informação se o serviço prestado é um caso de: imunidade, exportação de serviço ou não incidência do ISSQN? | Combo | Obrigatório | Marcar uma das opções: ○ Não ○ Sim |

Vários campos do terceiro passo (Valores) serão preenchidos a depender das opções feitas neste campo.

Se a resposta for “Não”, nenhuma informação adicional será necessária.

![Figura 4.1.2-4 – Campo “O serviço prestado é um caso de…” com a opção “Não” marcada](../../img/p043-086-fig-p045-007.png)

*Figura 4.1.2-4 – Campo “O serviço prestado é um caso de…” com a opção “Não” marcada.*


Se a resposta for “Sim”, outros campos abrirão para preenchimento.

![Figura 4.1.2-5 – Campo “O serviço prestado é um caso de…” com a opção “Sim” marcada](../../img/p043-086-fig-p045-008.png)

*Figura 4.1.2-5 – Campo “O serviço prestado é um caso de…” com a opção “Sim” marcada.*


<!-- p.46 -->

Caso se tenha optado por “Sim” no campo anterior, deve-se informar se é um caso de: Imunidade, Exportação de Serviço ou Não incidência do ISSQN:

![Figura 4.1.2-6 – Lista de motivos da não tributação do ISSQN sobre o serviço prestado](../../img/fig-p046-1.png)

*Figura 4.1.2-6 – Lista de motivos da não tributação do ISSQN sobre o serviço prestado.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Qual o motivo da não tributação do ISSQN sobre o serviço prestado? (opção “Imunidade”)<br>![Campo “Imunidade”](../../img/p043-086-fig-p046-011.png) | Informação se é um caso de “Imunidade” de tributação do ISSQN sobre o serviço prestado. | Combo | Obrigatório | Selecionar “Imunidade” caso seja a opção para não tributação do ISSQN sobre o serviço prestado. |

Selecionar uma das opções do Tipo de Imunidade para não incidência de ISSQN.

![Figura 4.1.2-7 – Lista de tipos de imunidade para não incidência de ISSQN](../../img/fig-p046-2.png)

*Figura 4.1.2-7 – Lista de tipos de imunidade para não incidência de ISSQN.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Qual o motivo da não tributação do ISSQN sobre o serviço prestado? (opção “Exportação de Serviço”)<br>![Campo “Exportação de Serviço”](../../img/p043-086-fig-p046-013.png) | Informação se é um caso de “Exportação de Serviço” de tributação do ISSQN sobre o serviço prestado. | Combo | Obrigatório | Selecionar “Exportação de Serviço” caso seja a opção para não tributação do ISSQN sobre o serviço prestado. |

O sistema exibirá a seguinte mensagem no painel:

![Figura 4.1.2-8 – Mensagem exibida no painel para exportação de serviço](../../img/fig-p046-3.png)

*Figura 4.1.2-8 – Mensagem exibida no painel para exportação de serviço.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Informe o país em que se verificou o resultado do serviço prestado<br>![Campo “Informe o país…”](../../img/p043-086-fig-p046-015.png) | Informação do país em que se verificou o resultado do serviço <!-- p.47 -->prestado | Combo | Obrigatório | Selecionar um dos países da lista constantes da `TAB.PAIS_ISO2` do `Anexo_A-Municipio_IBGE-Paises_ISO2-V1.00-Snnfse-20251210`. |
| Qual o motivo da não tributação do ISSQN sobre o serviço prestado? (opção “Não incidência”)<br>![Campo “Não incidência”](../../img/p043-086-fig-p047-016.png) | Informação se é um caso de “Não incidência” de tributação do ISSQN sobre o serviço prestado. Esta opção somente é possível se no campo “Código de Tributação Nacional” for informado o código 99.01.01 - Serviço sem incidência de ISSQN e ICMS ou para códigos de serviço configurados como não incidência de ISSQN no painel municipal do respectivo município. | Combo | Obrigatório | Preenchimento automático quando no campo “Código de Tributação Nacional” for informado o código 99.01.01 - Serviço sem incidência de ISSQN e ICMS ou para códigos de serviço configurados como não incidência de ISSQN no painel municipal do respectivo município. |

**IMPORTANTE:** Se o “Código de Tributação Nacional” informado não for o 99.01.01 ou algum cadastrado no respectivo município como não incidência, o sistema não permitirá esta seleção e exibirá a seguinte mensagem:

![Figura 4.1.2-9 – Mensagem do sistema para a opção “Não incidência”](../../img/fig-p047-1.png)

*Figura 4.1.2-9 – Mensagem do sistema para a opção “Não incidência”.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Município de incidência do ISSQN<br>![Campo “Município de incidência do ISSQN”](../../img/p043-086-fig-p047-018.png) | Nome do município de incidência do <!-- p.48 -->imposto. Este campo será exibido a depender do “Código de Tributação Nacional”. Por exemplo: 17.05.01 – Fornecimento de mão-de-obra, mesmo em caráter temporário, inclusive de empregados ou trabalhadores, avulsos ou temporários, contratados pelo prestador/fornecedor de serviço. | Texto | Obrigatório | O Sistema Nacional NFS-e identifica a localidade de incidência do ISSQN conforme regras estabelecidas na LC 116/03.<br>Existem exceções em que o Sistema Nacional NFS-e não identifica a localidade de incidência nem haverá destaque do ISSQN na emissão da NFS-e:<br>1) Em caso de imunidade não existe localidade de incidência para o ISSQN;<br>2) Em caso de exportação de serviço não existe localidade de incidência para o ISSQN;<br>3) Em caso de serviços sem a incidência de ISSQN (cTribNac igual a 990101), não existe localidade de incidência para o ISSQN;<br>4) Em caso de operação tributável deve existir localidade de incidência para o ISSQN.<br>Inclusive para os serviços prestados para os subitens 03.04 e 22.01, se informado um município <!-- p.49 -->específico no local de prestação de serviço, conforme `TAB.MUN_IBGE`.<br>As exceções para não existir município de incidência do ISSQN nas NFS-e de serviços prestados para os subitens 03.04 e 22.01, respectivamente, são definidos abaixo:<br>a) Em caso de locação, sublocação, arrendamento, direito de passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e condutos de qualquer natureza (subitem 03.04 da lista de serviço do Sistema Nacional NFS-e), se o local de prestação de serviço informado na DPS corresponder à localidade geral definida para este serviço (0000000, conforme `TAB.LOC.GERAL`), então não é identificada a localidade de incidência para o ISSQN na NFS-e (as informações das <!-- p.50 -->localidades de incidência do ISSQN para o serviço 03.04 ocorrerão na solicitação de apuração enviada pelo contribuinte ao MAN); |
| Data de Competência | Data da competência da incidência do ISSQN. | Data | Obrigatório | Recupera a data de competência informada na tela inicial (Pessoas) |
| Item da NBS correspondente ao serviço/fornecimento prestado<br>![Campo “Item da NBS”](../../img/p043-086-fig-p050-019.png) | Informação sobre a NBS - Nomenclatura Brasileira de Serviços | Combo | Obrigatório | Selecionar a NBS correspondente ao serviço prestado |
| Código indicador da operação (Preenchimento obrigatório para emissões com destaque de IBS/CBS)<br>![Campo “Código indicador da operação”](../../img/p043-086-fig-p050-020.png) | Informação sobre o Código indicador da operação | Combo | Obrigatório | Selecionar o Código indicador da operação correspondente ao serviço prestado, conforme lista do `AnexoVII-IndOp_IBSCBS` |
| Descrição do Serviço | Descrição do serviço prestado | Texto | Obrigatório | Incluir uma descrição detalhada do serviço prestado |

## Informações do imóvel

**INFORMAÇÕES DO IMÓVEL** – Campos que serão exibidos quando o Serviço/Fornecimento prestado forem relacionados a imóveis – **Itens 020101, 020201 e 020301 do Código indicador da operação.**

![Figura 4.1.2-10 – Seleção de informações do imóvel](../../img/fig-p050-1.png)

*Figura 4.1.2-10 – Seleção de informações do imóvel.*

<!-- p.51 -->

**Obs.:** Caso sejam informados os subitens 07.02 e 07.05 do Código de Tributação Nacional, **ao invés de o sistema exibir os campos de “INFORMAÇÕES DO IMÓVEL”, serão exibidos os campos relativos a “INFORMAÇÕES PARA OBRA”**, que também contemplam as informações de imóveis.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Código do Cadastro Imobiliário Brasileiro – CIB (somente permitido se a opção do Local da Prestação do Serviço for “Brasil”) | Código do Cadastro Imobiliário Brasileiro | Texto | Obrigatório | Incluir o CIB |

**Endereço no Brasil** – Somente permitido se a opção do Local da Prestação do Serviço for “Brasil”

![Figura 4.1.2-11 – Informações do imóvel: endereço no Brasil](../../img/fig-p051-1.png)

*Figura 4.1.2-11 – Informações do imóvel: endereço no Brasil.*

**Obs.:** O CEP a ser informado para endereço do imóvel deve pertencer ao município que foi informado como local da prestação do serviço.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CEP | Informação do número do CEP da obra. | Número | Obrigatório | Incluir o CEP da obra |
| Município | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Bairro | Informação do bairro | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Logradouro | Informação do nome do logradouro. | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela <!-- p.52 -->TOM com o CEP informado |
| Número | Informação do número do logradouro, | Texto | Obrigatório | Incluir o número do logradouro |
| Complemento | Informação do complemento do logradouro. | Texto | Opcional | Incluir o complemento do logradouro |

**Endereço no Exterior** – Somente permitido se a opção do Local da Prestação do Serviço não for “Brasil”

![Figura 4.1.2-12 – Informações do imóvel: endereço no exterior](../../img/fig-p052-1.png)

*Figura 4.1.2-12 – Informações do imóvel: endereço no exterior.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Bairro | Informação do bairro no exterior. | Texto | Obrigatório | Informar o bairro no exterior do local da obra. |
| Logradouro | Informação do nome do logradouro no exterior. | Texto | Obrigatório | Informar o logradouro no exterior do local da obra. |
| Número | Informação do número do logradouro | Texto | Obrigatório | Informar o número no exterior do local da obra. |
| Complemento | Informação do complemento do logradouro no exterior. | Texto | Opcional | Informar o complemento no exterior do local da obra. |
| Código de Endereçamento Postal | Informação do número do Código de endereçamento Postal no exterior. | Número | Obrigatório | Informar o código de endereçamento fiscal no exterior do local da obra. |
| <!-- p.53 -->Estado, província ou região | Informação do Estado, província ou região no exterior. | Texto | Obrigatório | Informar o no exterior Estado, província ou região do local da obra. |
| Cidade | Informação da cidade no exterior. | Texto | Obrigatório | Informar a cidade no exterior do local da obra. |
| Inscrição Imobiliária Fiscal<br>![Campo “Inscrição Imobiliária Fiscal” (imóvel)](../../img/p043-086-fig-p053-024.png) | Código de inscrição imobiliária fornecida pela Prefeitura | Texto | Obrigatório | Incluir a inscrição imobiliária fiscal (código fornecido pela prefeitura para a identificação da obra ou para fins de recolhimento do IPTU). |

## Informações para obra

**INFORMAÇÕES PARA OBRA** – Campos que serão exibidos quando o Serviço/Fornecimento prestado se referir a Obras – **Subitens 07.02 e 07.05 do Código de Tributação Nacional.** Deve-se marcar uma das opções de informação:

![Figura 4.1.2-13 – Seleção de informações para obra](../../img/p043-086-fig-p053-025.png)

*Figura 4.1.2-13 – Seleção de informações para obra.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Código da Obra – Somente permitido se a opção do Local da Prestação do Serviço for Brasil<br>![Campo “Código da Obra”](../../img/fig-p053-1.png) | Número de identificação da obra | Texto | Obrigatório | Incluir o código de obra |
| **Código do Cadastro <!-- p.54 -->Imobiliário Brasileiro CIB** – Somente permitido se a opção do Local da Prestação do Serviço for “Brasil”<br>![Campo “Código do Cadastro Imobiliário Brasileiro CIB”](../../img/p043-086-fig-p054-027.png) | Código do Cadastro Imobiliário Brasileiro | Texto | Obrigatório | Incluir o CIB |

**Endereço no Brasil** – Somente permitido se a opção do Local da Prestação do Serviço for “Brasil”

![Figura 4.1.2-14 – Informações para obra: endereço no Brasil](../../img/fig-p054-1.png)

*Figura 4.1.2-14 – Informações para obra: endereço no Brasil.*

**Obs.:** O CEP a ser informado para endereço do imóvel deve pertencer ao município que foi informado como local da prestação do serviço.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CEP | Informação do número do CEP da obra. | Número | Obrigatório | Incluir o CEP da obra |
| Município | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Bairro | Informação do bairro | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Logradouro | Informação do nome do logradouro. | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP <!-- p.55 -->informado |
| Número | Informação do número do logradouro, | Texto | Obrigatório | Incluir o número do logradouro |
| Complemento | Informação do complemento do logradouro. | Texto | Opcional | Incluir o complemento do logradouro |

**Endereço no Exterior** – Somente permitido se a opção do Local da Prestação do Serviço não for “Brasil”

![Figura 4.1.2-15 – Informações para obra: endereço no exterior](../../img/fig-p055-1.png)

*Figura 4.1.2-15 – Informações para obra: endereço no exterior.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Bairro | Informação do bairro no exterior. | Texto | Obrigatório | Informar o bairro no exterior do local da obra. |
| Logradouro | Informação do nome do logradouro no exterior. | Texto | Obrigatório | Informar o logradouro no exterior do local da obra. |
| Número | Informação do número do logradouro | Texto | Obrigatório | Informar o número no exterior do local da obra. |
| Complemento | Informação do complemento do logradouro no exterior. | Texto | Opcional | Informar o complemento no exterior do local da obra. |
| Código de Endereçamento Postal | Informação do número do Código de endereçamento Postal no exterior. | Número | Obrigatório | Informar o código de endereçamento fiscal no exterior do local da obra. |
| Estado, província ou <!-- p.56 -->região | Informação do Estado, província ou região no exterior. | Texto | Obrigatório | Informar o no exterior Estado, província ou região do local da obra. |
| Cidade | Informação da cidade no exterior. | Texto | Obrigatório | Informar a cidade no exterior do local da obra. |
| Inscrição Imobiliária Fiscal<br>![Campo “Inscrição Imobiliária Fiscal” (obra)](../../img/p043-086-fig-p056-030.png) | Código de inscrição imobiliária fornecida pela Prefeitura | Texto | Obrigatório | Incluir a inscrição imobiliária fiscal (código fornecido pela prefeitura para a identificação da obra ou para fins de recolhimento do IPTU). |

## Informações para atividade de evento

**INFORMAÇÕES PARA ATIVIDADE DE EVENTO** – Campos que serão exibidos quando o serviço prestado se refere a atividades de Eventos – **Subitens do item 12 do Código de Tributação Nacional.**

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Data Inicial<br>![Campo “Data Inicial”](../../img/p043-086-fig-p056-031.png) | Data em que se iniciou a prestação do serviço | Data | Obrigatório | Incluir a data de início do serviço |
| Data Final<br>![Campo “Data Final”](../../img/p043-086-fig-p056-032.png) | Data em que se foi ou será concluída a prestação do serviço | Data | Obrigatório | Incluir a data final do serviço |
| Descrição | Descrição do serviço prestado | Texto | Obrigatório | Incluir descrição do serviço |

Seleção de uma das formas de informação sobre o serviço prestado:

![Figura 4.1.2-16 – Seleção da forma de informação sobre o serviço prestado (atividade de evento)](../../img/fig-p056-1.png)

*Figura 4.1.2-16 – Seleção da forma de informação sobre o serviço prestado (atividade de evento).*

**Identificador** – Somente permitido se a opção do Local da Prestação do Serviço for “Brasil”

![Figura 4.1.2-17 – Seleção “Identificador” e campo “Identificação” (atividade de evento)](../../img/p043-086-fig-p057-034.png)

*Figura 4.1.2-17 – Seleção “Identificador” e campo “Identificação” (atividade de evento).*


| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| <!-- p.57 -->Identificação | Informação sobre o código identificador da atividade do evento determinado pela Administração Tributária | Código | Opcional | Incluir código de identificação da atividade do evento |

**Endereço no Brasil** – Somente permitido se a opção do Local da Prestação do Serviço for “Brasil”

![Figura 4.1.2-18 – Atividade de evento: endereço no Brasil](../../img/fig-p057-1.png)

*Figura 4.1.2-18 – Atividade de evento: endereço no Brasil.*

**Obs.:** O CEP a ser informado para endereço do imóvel deve pertencer ao município que foi informado como local da prestação do serviço.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| CEP | Informação do número do CEP da obra. | Número | Obrigatório | Incluir o CEP do local do evento. |
| Município | Informação do nome do município ao qual pertence a obra no Brasil | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Bairro | Informação do bairro | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela TOM com o CEP informado |
| Logradouro | Informação do nome do logradouro. | Texto | Obrigatório | O sistema recupera as informações de logradouro na tabela <!-- p.58 -->TOM com o CEP informado |
| Número | Informação do número do logradouro, | Texto | Obrigatório | Incluir o número do logradouro do local do evento. |
| Complemento | Informação do complemento do logradouro. | Texto | Opcional | Incluir o complemento do logradouro do local do evento. |

**Endereço no Exterior** – Somente permitido se a opção do Local da Prestação do Serviço não for “Brasil”

![Figura 4.1.2-19 – Atividade de evento: endereço no exterior](../../img/p043-086-fig-p058-036.png)

*Figura 4.1.2-19 – Atividade de evento: endereço no exterior.*


| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Bairro | Informação do bairro no exterior. | Texto | Obrigatório | Informar o bairro no exterior do local do evento. |
| Logradouro | Informação do nome do logradouro no exterior. | Texto | Obrigatório | Informar o logradouro no exterior do local do evento. |
| Número | Informação do número do logradouro | Texto | Obrigatório | Informar o número no exterior do local do evento. |
| Complemento | Informação do complemento do logradouro no exterior. | Texto | Opcional | Informar o complemento no exterior do local do evento. |
| Código de Endereçamento Postal | Informação do número do Código de endereçamento Postal no exterior. | Número | Obrigatório | Informar o código de endereçamento fiscal no exterior do local do evento. |
| Estado, província ou <!-- p.59 -->região | Informação do Estado, província ou região no exterior. | Texto | Obrigatório | Informar o no exterior Estado, província ou região do local do evento. |
| Cidade | Informação da cidade no exterior. | Texto | Obrigatório | Informar a cidade no exterior do local do evento. |

## Informações para comércio exterior

**INFORMAÇÕES PARA COMÉRCIO EXTERIOR** – Quando o País da Prestação/Fornecimento do serviço é diferente de Brasil, algumas informações adicionais são requisitadas.

Para a RFB, a prestação de serviço caracteriza-se como uma operação de comércio exterior quando existe ao menos um dos seguintes itens identificados/localizados no exterior: tomador/adquirente, intermediário ou local da prestação do serviço. Dessa forma, o emitente da DPS deverá prestar informações sobre esse tipo de transação, conforme apresentado a seguir:

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Modo de Prestação | Informação sobre o modo de prestação do serviço, no âmbito do comércio exterior | Combo | Obrigatório | Selecionar uma das opções da lista disponibilizada: ○ Transfronteiriço ○ Consumo no Brasil ○ Movimento Temporário de Pessoas Físicas ○ Consumo no Exterior |

![Figura 4.1.2-20 – Lista de modos de prestação no âmbito do comércio exterior](../../img/fig-p059-1.png)

*Figura 4.1.2-20 – Lista de modos de prestação no âmbito do comércio exterior.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Vínculo entre as partes no negócio | Informação sobre o vínculo entre as partes no negócio | Combo | Obrigatório | Selecionar um dos vínculos do serviço prestado da lista disponibilizada. ○ Sem vínculo com o tomador/prestador ○ Controlada ○ Controladora ○ Coligada ○ Matriz ○ Outro vínculo ○ Desconhecido |

![Figura 4.1.2-21 – Lista de vínculos entre as partes no negócio](../../img/fig-p059-2.png)

*Figura 4.1.2-21 – Lista de vínculos entre as partes no negócio.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Moeda | Identifica a moeda <!-- p.60 -->da transação comercial. | Código | Obrigatório | Informar o código da moeda publicado na tabela de moedas do Banco Central do Brasil composto por 3 dígitos numéricos. |
| Valor do serviço/fornecimento em moeda estrangeira | Valor do serviço expresso na moeda estrangeira especificada | Valor | Obrigatório | Incluir o valor do serviço expresso na moeda estrangeira especificada |
| Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço/fornecimento | Descreve o mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço/fornecimento. | Combo | Obrigatório | Selecionar o mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador/fornecedor do serviço dentre as opções da lista, por exemplo: ○ Nenhum; ○ ACC – Adiantamento sobre Contrato de Câmbio – Redução a zero do IR e do IOF; ○ ACE – Adiantamento sobre Cambiais Entregues – Redução a Zero do IR e do IOF; ○ BNDES-Exim Pós-Embarque – Serviços; ○ BNDES-Exim Pré-Embarque – Serviços. ○ FGE – Fundo de Garantia à Exportação ○ PROEX – <!-- p.61 -->Equalização ○ PROEX – Financiamento |

![Figura 4.1.2-22 – Lista de mecanismos de apoio/fomento utilizados pelo prestador](../../img/fig-p060-1.png)

*Figura 4.1.2-22 – Lista de mecanismos de apoio/fomento utilizados pelo prestador.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço/fornecimento<br>![Campo “Mecanismo de apoio/fomento … tomador”](../../img/p043-086-fig-p061-040.png) | Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço/fornecimento | Combo | Obrigatório | Selecionar o mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador/adquirente do serviço/fornecimento dentre as opções da lista, por exemplo: ○ Nenhum; ○ Adm. Pública e Repr. Internacional; ○ Aluguéis e Arrend. Mercantil de máquinas, equip., embarc. E aeronaves; ○ Arrendamento mercantil de aeronave para empresa de transporte aéreo público; ○ Comissão a agentes externos na exportação. ○ Despesas de armazenagem, mov. e transporte de carga no exterior ○ Eventos FIFA (subsidiária) ○ Eventos FIFA ○ <!-- p.62 -->Fretes, arrendamentos de embarcações ou aeronaves e outros ○ Material Aeronáutico ○ Promoção de Bens no Exterior ○ Promoção de Dest. Turísticos Brasileiros ○ Promoção do Brasil no Exterior ○ Promoção Serviços no Exterior ○ RECINE ○ RECOPA ○ Registro e Manutenção de marcas, patentes e cultivares ○ REICOMP ○ REIDI ○ REPENEC ○ REPES ○ RETAERO ○ RETID ○ Royalties, Assistência Técnica, Científica e Assemelhados ○ Serviços de avaliação da conformidade vinculados aos Acordos da OMC ○ ZPE |

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Existe vínculo da operação à movimentação <!-- p.63 -->temporária de bens? | Informação se Existe vínculo da operação à movimentação temporária de bens. | Combo | Obrigatório | Selecionar a opção do vínculo dentre a lista disponibilizada: ○ Não; ○ Vinculada – Declaração de Importação; ○ Vinculada – Declaração de Exportação. |

![Figura 4.1.2-23 – Lista de vínculo da operação à movimentação temporária de bens](../../img/fig-p063-1.png)

*Figura 4.1.2-23 – Lista de vínculo da operação à movimentação temporária de bens.*

Se a opção acima for: “Vinculada – Declaração de Importação”, o contribuinte deve informar o número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| DI/DSI/DA/DRI-E averbado | Número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado | Texto | Obrigatório | Incluir Número da Declaração de Importação (DI/DSI/DA/DRI-E) averbado |

Se a opção acima for: “Vinculada – Declaração de Exportação”, o contribuinte deve informar o Registro de Exportação (RE) averbado.

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| RE averbado | Número do Registro de Exportação (RE) averbado | Texto | Obrigatório | Incluir o Número do Registro de Exportação (RE) averbado |
| Deseja compartilhar a NFS-e que será gerada desta DPS com o MDIC? | Informação sobre o compartilhamento da NFS-e que será gerada a partir desta DPS com o MDIC. | Combo | Obrigatório | Selecionar uma das opções: ○ Sim ○ Não |

## Tipo de operação

**TIPO DE OPERAÇÃO** – Esse campo é exigido para os casos de **compras governamentais** ou algum dos serviços dispostos no art. 254 da LC 214/2025 (**subitens 25.05, 15.09, 17.12 e 10.05, da lista de serviços**).

![Figura 4.1.2-24 – Seção “Tipo de operação” com o aviso sobre o campo](../../img/p043-086-fig-p063-042.png)

*Figura 4.1.2-24 – Seção “Tipo de operação” com o aviso sobre o campo.*


| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Tipo de Operação | Informação sobre Tipo de operação <!-- p.64 -->com entes governamentais ou outros serviços sobre bens imóveis | Combo | Obrigatório | Selecionar uma das opções da lista: 1. Fornecimento com pagamento posterior 2. Recebimento do pagamento com fornecimento já realizado 3. Fornecimento com pagamento já realizado 4. Recebimento do pagamento com fornecimento posterior 5. Fornecimento e recebimento do pagamento concomitantes |

![Figura 4.1.2-25 – Lista de tipos de operação](../../img/fig-p064-1.png)

*Figura 4.1.2-25 – Lista de tipos de operação.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Chave da NFS-e<br>![Campo “Chave da NFS-e”](../../img/p043-086-fig-p064-044.png) | Informação da Chave de acesso da NFS-e com fornecimento ou recebimento do pagamento realizado (Opções 2 ou 3 do Tipo de Operação) | Valor | Obrigatório | Informar a chave de acesso da NFS-e que acobertou o fornecimento ou recebimento do pagamento realizado. Deve-se informar uma chave de acesso válida, com 50 caracteres alfanuméricos. Caso seja informada uma chave de acesso inválida, o sistema exibirá a seguinte mensagem: “Para avançar, por favor verifique a seguinte situação: 1. Informe uma chave de NFS-e válida.”<br>![Alerta de chave inválida](../../img/p043-086-fig-p064-045.png) |

<!-- p.65 -->

## Informações complementares

**INFORMAÇÕES COMPLEMENTARES**

![Figura 4.1.2-26 – Tela de informações complementares](../../img/fig-p065-1.png)

*Figura 4.1.2-26 – Tela de informações complementares.*

| Campo | Descrição | Tipo | Ocorrência | Ação |
|---|---|---|---|---|
| Número do documento de responsabilidade técnica | Informação sobre o número do documento de responsabilidade técnica | Texto | Opcional | Incluir o número do documento de responsabilidade técnica. |
| Documento de referência | Informação sobre documentos referenciados | Texto | Opcional | Incluir dados sobre o documento de responsabilidade técnica. |
| Informações Complementares | Descrição de informações complementares | Texto | Opcional | Incluir informações complementares sobre o serviço. |
| Número do Pedido, Ordem de Compra, Ordem de Serviço ou Projeto que autorize a prestação do serviço/fornecimento em operações B2B | Informação sobre número do pedido, ordem de compra etc. | Texto | Opcional | Incluir as referidas informações. Será habilitado o botão “+ Incluir Item” para identificação de itens a serem incluídos no pedido, ordem de compra etc. |
| Incluir Item<br>![Botão “Incluir Item”](../../img/p043-086-fig-p065-048.png) | Identificação de itens a serem incluídos no Pedido, Ordem de Compra, Ordem de Serviço ou Projeto que autorize a prestação do serviço/fornecimento em operações B2B. | Texto | Obrigatório | Incluir os itens que compõem as referidas informações de pedidos, ordem de compra etc. |

![Figura 4.1.2-27 – Janela “Incluir Item” para operações B2B](../../img/fig-p065-2.png)

*Figura 4.1.2-27 – Janela “Incluir Item” para operações B2B.*

<!-- p.66 -->

Após o preenchimento dos campos da etapa “Serviço”, clicar em **Avançar**.
