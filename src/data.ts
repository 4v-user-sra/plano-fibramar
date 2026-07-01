export interface CardData {
  title: string;
  value: string;
  detail: string;
  iconType: 'trending-up' | 'alert-circle' | 'zap' | 'map' | 'target' | 'bar-chart';
}

export interface RegionData {
  name: string;
  volume: string;
  cpl: string;
  status: string;
  type: 'success' | 'warning' | 'danger' | 'neutral';
}

export interface StrategyData {
  title: string;
  description: string;
  type: 'action' | 'risk';
}

export interface ViewContentData {
  title: string;
  subtitle: string;
  cards: CardData[];
  regions: RegionData[];
  strategies: StrategyData[];
}

export const verticalData: ViewContentData = {
  title: "Escala Vertical",
  subtitle: "Otimização e aumento de investimento em campanhas de alta performance.",
  cards: [
    { 
      title: "Prioridade 1", 
      value: "Escalar Maricá e Saquarema", 
      detail: "Maiores volumes observados. Aumentar orçamento de mídia em 20% em Maricá e na vice-líder Saquarema/Unamar (Google e Meta) e acompanhar o resultado. Não testar novas ofertas neste momento.", 
      iconType: "trending-up" 
    },
    { 
      title: "Alerta Crítico", 
      value: "Monitorar CPL", 
      detail: "Se o CPL subir após o incremento, reduzir a verba em 20% (mantendo a escala base) para estabilizar a performance.", 
      iconType: "alert-circle" 
    },
    { 
      title: "Apoio Estratégico", 
      value: "Rotação Criativa", 
      detail: "Sustentar a performance rotacionando formatos (imagem ↔ vídeo curto) e criativos campeões (foco em 'Dor + Benefício') para combater fadiga e estabilizar o CTR.", 
      iconType: "zap" 
    }
  ],
  regions: [
    { name: "Maricá", volume: "Maior volume", cpl: "Google: ~R$ 13,30 | Meta: ~R$ 12,50", status: "Escala vertical (+20% de orçamento)", type: "success" },
    { name: "Saquarema e Unamar", volume: "Bom volume (Google e Meta)", cpl: "Google: ~R$ 15,70 | Meta: ~R$ 14,50", status: "Escala vertical (Candidato forte pelo alto volume de conversão)", type: "success" },
    { name: "MG (Benfica)", volume: "Médio volume", cpl: "Google: ~R$ 11,87 | Meta: ~R$ 10,90", status: "Escala média controlada (Garantir estabilidade e CPL baixo)", type: "warning" }
  ],
  strategies: [
    { title: "Foco em Search com Intenção", description: "Ao fazer expansão vertical, aumente o orçamento nas campanhas onde as conversões em WhatsApp já acontecem em volume: Maricá (Google Ads e Meta Ads) e Saquarema/Unamar (Google Ads).", type: "action" },
    { title: "Rebalanceamento de Verba", description: "Regiões com CPL alto consumindo desproporcionalmente o spend, como Vila Velha e Muqui & Mimoso (Google Ads e Meta Ads), terão a verba reduzida e rebalanceada para acelerar Maricá (Google Ads e Meta Ads).", type: "action" }
  ]
};

export const horizontalData: ViewContentData = {
  title: "Escala Horizontal",
  subtitle: "Expansão para novas regiões e adjacências baseada em aprendizados validados.",
  cards: [
    { 
      title: "Foco Principal", 
      value: "Adjacências", 
      detail: "Planejar adjacências a partir de Maricá. Público nos arredores permite ampliar alcance com menor risco.", 
      iconType: "map" 
    },
    { 
      title: "Contenção", 
      value: "Pausar Expansão", 
      detail: "Conter expansão em Vila Velha e Muqui & Mimoso até ajustar oferta/CTA para evitar diluição.", 
      iconType: "target" 
    },
    { 
      title: "Alerta Crítico", 
      value: "Zero Conversões", 
      detail: "Se zerar conversas por 3+ dias em nova adjacência: diagnosticar oferta, replicar de Maricá e ajustar raio.", 
      iconType: "alert-circle" 
    }
  ],
  regions: [
    { name: "Piuma e Anchieta", volume: "Alcance: ~120k pessoas", cpl: "Google CPC: R$ 2,41 | Meta CPC: R$ 1,90", status: "Escalar para expandir público", type: "success" },
    { name: "Vila Velha", volume: "Alcance: ~250k pessoas", cpl: "Google CPC: R$ 3,15 | Meta CPC: R$ 2,50", status: "Escalar para expandir público", type: "success" },
    { name: "Muqui & Mimoso", volume: "Alcance: ~80k pessoas", cpl: "Google CPC: R$ 2,80 | Meta CPC: R$ 2,10", status: "Escalar para expandir público", type: "success" }
  ],
  strategies: [
    { title: "Expansão Horizontal Inteligente", description: "Priorizar até três regiões com melhor equilíbrio entre CTR e volume de alcance (Piuma e Anchieta, Vila Velha e Muqui & Mimoso) para trabalhar um bom volume de expansão de público.", type: "action" },
    { title: "Expansão de Raio Gradual", description: "Realizar expansão de raio gradual de alguns quilômetros a partir dos locais que já atuamos nessas regiões prioritárias que apresentam bom equilíbrio entre CTR e volume.", type: "action" },
    { title: "Atenção para o YouTube", description: "Apesar de não gerar conversões diretas, o foco da campanha de YouTube é gerar alcance e reconhecimento de marca, aquecendo o público indiretamente para a expansão em novas regiões.", type: "action" }
  ]
};
