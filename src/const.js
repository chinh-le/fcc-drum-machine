import drumQ from './assets/effects/drums/fat_big_techno_kick_and_hat_one_shot_kwu.mp3';
import drumW from './assets/effects/drums/heavy_techno_kick_silent_servant_like_w38.mp3';
import drumE from './assets/effects/drums/natural_techno_bongo_kick_yfh.mp3';
import drumA from './assets/effects/drums/panned_hard_techno_kick_r2x.mp3';
import drumS from './assets/effects/drums/punchy_clicky_techno_kick_z9w.mp3';
import drumD from './assets/effects/drums/pushing_steely_techno_kick_mco.mp3';
import drumZ from './assets/effects/drums/reverbed_dark_rolling_techno_kick_bpw.mp3';
import drumX from './assets/effects/drums/sloppy_classic_techno_kick_k1m.mp3';
import drumC from './assets/effects/drums/summer_house_tuned_kick_rwv.mp3';

import miscQ from './assets/effects/miscs/champagne_cork_popping_c7x.mp3';
import miscW from './assets/effects/miscs/cheers_bottle_one_ab_bb_voy.mp3';
import miscE from './assets/effects/miscs/electric_screwdriver_with_wooden_place_resonance_lfj.mp3';
import miscA from './assets/effects/miscs/gulp_sound_effect_big_v4l.mp3';
import miscD from './assets/effects/miscs/hammer_hitting_prefab_wood_panel_n4n.mp3';
import miscS from './assets/effects/miscs/horse_snorts_wbf.mp3';
import miscZ from './assets/effects/miscs/opening_wine_bottle_5uq.mp3';
import miscX from './assets/effects/miscs/short_gasping_bqb.mp3';
import miscC from './assets/effects/miscs/single_beeping_sharp_huz.mp3';

export const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
export const drums = 'drums';
export const miscs = 'miscs';
export const drumMap = new Map([
  [keys[0], drumQ],
  [keys[1], drumW],
  [keys[2], drumE],
  [keys[3], drumA],
  [keys[4], drumS],
  [keys[5], drumD],
  [keys[6], drumZ],
  [keys[7], drumX],
  [keys[8], drumC],
]);
export const miscMap = new Map([
  [keys[0], miscQ],
  [keys[1], miscW],
  [keys[2], miscE],
  [keys[3], miscA],
  [keys[4], miscS],
  [keys[5], miscD],
  [keys[6], miscZ],
  [keys[7], miscX],
  [keys[8], miscC],
]);
