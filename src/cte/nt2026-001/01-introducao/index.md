<!-- p.04 -->

# 1 Introdução

A vinculação entre DFe e transação financeira sujeita ao split payment é estritamente necessária para a correta apuração dos débitos do fornecedor e concessão de créditos ao adquirente.

No split payment, há duas formas de o contribuinte indicar a vinculação entre o documento fiscal e a transação financeira sujeita ao split payment:

i. transmitindo a chave do documento fiscal ao prestador de serviço de pagamento, no início da transação financeira;

ii. informando os dados da transação financeira em campos ou evento de DFe.

Esta nota técnica detalha a forma (ii), de vinculação por meio da inserção de dados da transação financeira em campos de documento fiscal ou evento.

**Atenção:** O vínculo indicado pelo contribuinte não necessariamente representa um pagamento efetuado e liquidado. Indica uma expectativa de pagamento que pode ou não se concretizar. Por exemplo: um boleto pode ser emitido e não pago.

Nas transações sujeitas ao procedimento padrão do split payment e originadas por fornecedor/recebedor, a vinculação se faz necessária antes mesmo da liquidação financeira, com o propósito de viabilizar o split payment superinteligente. Cumpre destacar que, quanto mais tempo o fornecedor/recebedor demorar para reportar o vínculo entre DFe e transação financeira, menor serão as chances de o split superinteligente ser executado. Em caso de impossibilidade de execução do split superinteligente, será executado o split inteligente offline, com posterior devolução de valores retidos a maior no prazo de 3 (três) dias úteis.

São exemplos, não exaustivos, de possíveis cenários de vinculação por meio da inserção de dados da transação financeira em campos de DFe ou evento:

**Ex. 1.** O fornecedor emite um boleto para uma empresa adquirente, antes da emissão do DFe. Uma vez que o boleto foi emitido sem chave de DFe, a vinculação fica inicialmente pendente. Após a emissão do boleto, o fornecedor emite o DFe preenchendo os campos relativos à transação financeira, viabilizando assim a vinculação.

<!-- p.05 -->

**Ex. 2.** O fornecedor emite um DFe. Em seguida, o fornecedor emite QR code Pix dinâmico para a empresa adquirente, informando valores de IBS e CBS, mas sem a chave do DFe previamente emitido (nos termos do § 2º-A do Art. 32 da LC 214/2025, com redação dada pela LC 227/2026). O vínculo fica inicialmente pendente, em razão da ausência da chave DFe na transação de pagamento. Para finalmente efetivar a vinculação, o fornecedor emite evento atrelado ao DFe, com os dados do Pix dinâmico.

**Ex. 3.** O fornecedor emite um DFe antes do início da transação financeira. A empresa adquirente efetua o pagamento via TED informando a chave do DFe, porém comete um erro neste preenchimento, o que impede a correta vinculação entre transação financeira e DFe. A fim de resolver o problema, o fornecedor emite um evento atrelado ao DFe com os dados da transação financeira.
