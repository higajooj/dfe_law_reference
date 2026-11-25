# 11.5. Ações que devem ser tomadas após a recuperação da falha

A emissão do CTe em contingência é um procedimento de exceção e existem algumas ações que devem ser tomadas após a recuperação da falha, a principal delas é a transmissão dos CTe emitidos em contingência para que sejam autorizados.

## 11.5.1 Transmissão dos CTe Emitidos em Contingência

Os conhecimentos de transportes emitidos em contingência em FS-DA devem ser transmitidos imediatamente após a cessação dos problemas técnicos que impediam a transmissão do CTe, observando o prazo limite de 168 horas a partir da emissão do documento.

## 11.5.2 Rejeição de CTe Emitidos em Contingência

Caso ocorra a rejeição de algum CTe emitido em contingência, o contribuinte deverá:

1. Gerar novamente o arquivo com a mesma numeração e série, sanando a irregularidade desde que não se altere:
    - a) As variáveis que determinam o valor do imposto tais como: base de cálculo, alíquota, diferença de preço, quantidade, valor da prestação;
    - b) A correção de dados cadastrais que implique mudança do emitente, tomador, remetente ou do destinatário;
    - c) A data de emissão ou de saída;
2. Solicitar Autorização de Uso do CTe;
3. Imprimir o DACTE correspondente ao CTe autorizado, no mesmo tipo de papel utilizado para imprimir o DACTE original;
4. Providenciar, junto ao tomador, a entrega do CTe autorizado bem como do novo DACTE impresso nos termos do item III, caso a geração saneadora da irregularidade do CTe tenha promovido alguma alteração no DACTE.

## 11.5.3 CTe pendentes de retorno

Quando ocorrer uma falha, seja ela no ambiente do Contribuinte, no ambiente da SEFAZ origem ou no ambiente SVC, há a probabilidade de existirem CTe transmitidos pelo contribuinte e para as quais <!-- p.97 -->ele ainda não obteve o resultado do processamento. Estes CTe são denominados de “CTe Pendentes de Retorno”.

Os CTe Pendentes de Retorno podem não ter sido recebidos pela SEFAZ origem, estar na fila aguardando processamento, estar em processamento ou o processamento pode já ter sido concluído.

Caso a falha tenha ocorrido na SEFAZ origem, ao retornar à operação normal, é possível que os CTe que estavam em processamento sejam perdidos, e que os que estavam na fila tenham o seu processamento concluído normalmente.

Cabe à aplicação do contribuinte tratar adequadamente a situação dos CTe Pendentes de Retorno e executar, imediatamente após o retorno à operação normal, o cancelamento dos CTe Pendentes de Retorno que tenham sido autorizados pela SEFAZ origem, mas que tiveram as prestações de serviços correspondentes registradas em CTe emitidos em contingência.

**Importante**: é vedada a reutilização, em contingência, de número de CTe transmitido com tipo de emissão ‘Normal’.
