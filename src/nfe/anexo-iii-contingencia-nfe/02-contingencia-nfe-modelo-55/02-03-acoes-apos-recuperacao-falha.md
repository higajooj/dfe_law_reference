# 2.3. Ações que devem ser tomadas após a recuperação da falha

A emissão de NF-e em contingência é um procedimento de exceção e existem algumas ações que devem ser tomadas após a recuperação da falha, a principal delas é a transmissão das NF-e emitidas em contingência para que sejam autorizadas.

## 2.3.1. Transmissão das NF-e emitidas em Contingência

As notas fiscais emitidas em contingência FS-IA, FS-DA e EPEC devem ser transmitidas imediatamente após a cessação dos problemas técnicos que impediam a transmissão da NF-e, observando o prazo limite de transmissão estabelecido na legislação.

As NF-e emitidas com uma das SVC não precisam ser transmitidas para a SEFAZ de origem.

## 2.3.2. Rejeição de NF-e emitidas em Contingência

Caso ocorra a rejeição de alguma NF-e emitida em contingência, o contribuinte deverá:

1. Gerar novamente o arquivo com a mesma numeração e série², sanando a irregularidade desde que não se altere:
   - (a) as variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da operação ou da prestação;
   - (b) a correção de dados cadastrais que implique mudança do remetente ou do destinatário; nem
   - (c) a data de emissão ou de saída;
2. Solicitar Autorização de Uso da NF-e;

<!-- p.21 -->

3. Imprimir o DANFE correspondente à NF-e autorizada, no mesmo tipo de papel utilizado para imprimir o DANFE original;
4. Providenciar, junto ao destinatário, a entrega da NF-e autorizada bem como do novo DANFE impresso nos termos do item 3, caso a geração saneadora da irregularidade da NF-e tenha promovido alguma alteração no DANFE.

> ² Observar que a manutenção do número e série somente se aplica para os casos de rejeição da NF-e que foi emitida em contingência, e nunca para os casos em que a NF-e foi normalmente emitida mas o contribuinte não obteve êxito na consulta sobre o resultado da autorização de uso de uma NF-e emitida com *tpEmis* = “1” (as NF-e pendentes de retorno, conforme item 2.3.3).

## 2.3.3. NF-e Pendentes de Retorno

Quando ocorrer uma falha, seja ela no ambiente do Contribuinte, no ambiente da SEFAZ origem ou no ambiente da SVC, há a probabilidade de existirem NF-e transmitidas pelo contribuinte e para as quais ele ainda não obteve o resultado do processamento. Estas NF-e são denominadas de “NF-e Pendentes de Retorno”.

As NF-e Pendentes de Retorno podem não ter sido recebidas pela SEFAZ origem, estar na fila aguardando processamento, estar em processamento ou o processamento pode já ter sido concluído.

Caso a falha tenha ocorrido na SEFAZ origem, ao retornar à operação normal, é possível que as NF-e em processamento sejam perdidas, e que as que estavam na fila tenham o seu processamento concluído normalmente.

Todas as NF-e Pendentes de Retorno devem receber nova numeração para serem emitidas em contingência, este procedimento é necessário para evitar a rejeição da NF-e emitida em contingência que pode ocorrer caso a NF-e transmitida incialmente tenha sido autorizada.

Cabe à aplicação do contribuinte tratar adequadamente a situação das NF-e Pendentes de Retorno e executar, imediatamente após o retorno à operação normal, as ações necessárias à regularização da situação destas NF-e, a saber:

- Cancelar as NF-e Pendentes de Retorno que tenham sido autorizadas pela SEFAZ origem, mas que tiveram as operações comerciais correspondentes registradas em NF-e emitidas em contingência.
- Inutilizar a numeração das NF-e Pendentes de Retorno que não foram autorizadas ou denegadas.
