import { Button as TextOnlyTextPillButton } from "../text-only/text/pill/Button";
import { Button as TextOnlyTextRoundedButton } from "../text-only/text/rounded/Button";
import { Button as TextOnlyTextSharpButton } from "../text-only/text/sharp/Button";

import { Button as TextOnlyContainedPillButton } from "../text-only/contained/pill/Button";
import { Button as TextOnlyContainedRoundedButton } from "../text-only/contained/rounded/Button";
import { Button as TextOnlyContainedSharpButton } from "../text-only/contained/sharp/Button";

import { Button as TextOnlyOutlinedPillButton } from "../text-only/outlined/pill/Button";
import { Button as TextOnlyOutlinedRoundedButton } from "../text-only/outlined/rounded/Button";
import { Button as TextOnlyOutlineddSharpButton } from "../text-only/outlined/sharp/Button";

import { Button as IconBesideTextContainedPillButton } from "../icon-beside-text/contained/pill/icon-left/Button";
import { Button as IconBesideTextContainedRoundedButton } from "../icon-beside-text/contained/rounded/icon-left/Button";
import { Button as IconBesideTextContainedSharpButton } from "../icon-beside-text/contained/sharp/icon-left/Button";

import { Button as IconTextOutlinedPillButton } from "../icon-beside-text/outlined/pill/icon-left/Button";
import { Button as IconTextOutlinedRoundedButton } from "../icon-beside-text/outlined/rounded/icon-left/Button";
import { Button as IconTextOutlinedSharpButton } from "../icon-beside-text/outlined/sharp/icon-left/Button";

import { Button as IconOnlyContainedCircleButton } from "../icon-only/contained/circle/Button";
import { Button as IconOnlyContainedRoundedButton } from "../icon-only/contained/rounded/Button";
import { Button as IconOnlyContainedSharpButton } from "../icon-only/contained/sharp/Button";

import { Button as IconOnlyOutlinedCircleButton } from "../icon-only/outlined/circle/Button";
import { Button as IconOnlyOutlinedRoundedButton } from "../icon-only/outlined/rounded/Button";
import { Button as IconOnlyOutlinedSharpButton } from "../icon-only/outlined/sharp/Button";

import { Button as IconOnlyCircleCircleButton } from "../icon-only/icon/circle/Button";
import { Button as IconOnlyCircleRoundedButton } from "../icon-only/icon/rounded/Button";
import { Button as IconOnlyCircleSharpButton } from "../icon-only/icon/sharp/Button";

import { Button as IconUnderlyingTextContainedCircleButton } from "../icon-underlying-text/contained/circle/Button";
import { Button as IconUnderlyingTextContainedRoundedButton } from "../icon-underlying-text/contained/rounded/Button";
import { Button as IconUnderlyingTextContainedSharpButton } from "../icon-underlying-text/contained/sharp/Button";

import { Button as IconUnderlyingTextOutlinedCircleButton } from "../icon-underlying-text/outlined/circle/Button";
import { Button as IconUnderlyingTextOutlinedRoundedButton } from "../icon-underlying-text/outlined/rounded/Button";
import { Button as IconUnderlyingTextOutlinedSharpButton } from "../icon-underlying-text/outlined/sharp/Button";

import { Button as IconUnderlyingTextCircleCircleButton } from "../icon-underlying-text/icon/circle/Button";
import { Button as IconUnderlyingTextCircleRoundedButton } from "../icon-underlying-text/icon/rounded/Button";
import { Button as IconUnderlyingTextCircleSharpButton } from "../icon-underlying-text/icon/sharp/Button";

import styles from "./ButtonContainer.module.css";

type Props = {};

export function ButtonContainer(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <TextOnlyTextPillButton>text only</TextOnlyTextPillButton>
        <TextOnlyTextRoundedButton>text only</TextOnlyTextRoundedButton>
        <TextOnlyTextSharpButton>text only</TextOnlyTextSharpButton>
      </div>

      <div className={styles.row}>
        <TextOnlyContainedPillButton>text only</TextOnlyContainedPillButton>
        <TextOnlyContainedRoundedButton>
          text only
        </TextOnlyContainedRoundedButton>
        <TextOnlyContainedSharpButton>text only</TextOnlyContainedSharpButton>
      </div>
      <div className={styles.row}>
        <TextOnlyOutlinedPillButton>text only</TextOnlyOutlinedPillButton>
        <TextOnlyOutlinedRoundedButton>text only</TextOnlyOutlinedRoundedButton>
        <TextOnlyOutlineddSharpButton>text only</TextOnlyOutlineddSharpButton>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.row}>
        <IconBesideTextContainedPillButton icon="favorite">
          icon text
        </IconBesideTextContainedPillButton>
        <IconBesideTextContainedRoundedButton icon="favorite">
          icon text
        </IconBesideTextContainedRoundedButton>
        <IconBesideTextContainedSharpButton icon="favorite">
          icon text
        </IconBesideTextContainedSharpButton>
      </div>
      <div className={styles.row}>
        <IconTextOutlinedPillButton icon="favorite">
          icon text
        </IconTextOutlinedPillButton>
        <IconTextOutlinedRoundedButton icon="favorite">
          icon text
        </IconTextOutlinedRoundedButton>
        <IconTextOutlinedSharpButton icon="favorite">
          icon text
        </IconTextOutlinedSharpButton>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.row}>
        <IconOnlyContainedSharpButton icon="favorite" />
        <IconOnlyContainedRoundedButton icon="favorite" />
        <IconOnlyContainedCircleButton icon="favorite" />

        <IconOnlyOutlinedSharpButton icon="favorite" />
        <IconOnlyOutlinedRoundedButton icon="favorite" />
        <IconOnlyOutlinedCircleButton icon="favorite" />

        <IconOnlyCircleSharpButton icon="favorite" />
        <IconOnlyCircleRoundedButton icon="favorite" />
        <IconOnlyCircleCircleButton icon="favorite" />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.row}>
        <IconUnderlyingTextContainedSharpButton icon="favorite">
          like
        </IconUnderlyingTextContainedSharpButton>
        <IconUnderlyingTextContainedRoundedButton icon="favorite">
          like
        </IconUnderlyingTextContainedRoundedButton>
        <IconUnderlyingTextContainedCircleButton icon="favorite">
          like
        </IconUnderlyingTextContainedCircleButton>

        <IconUnderlyingTextOutlinedSharpButton icon="favorite">
          like
        </IconUnderlyingTextOutlinedSharpButton>
        <IconUnderlyingTextOutlinedRoundedButton icon="favorite">
          like
        </IconUnderlyingTextOutlinedRoundedButton>
        <IconUnderlyingTextOutlinedCircleButton icon="favorite">
          like
        </IconUnderlyingTextOutlinedCircleButton>

        <IconUnderlyingTextCircleSharpButton icon="favorite">
          like
        </IconUnderlyingTextCircleSharpButton>
        <IconUnderlyingTextCircleRoundedButton icon="favorite">
          like
        </IconUnderlyingTextCircleRoundedButton>
        <IconUnderlyingTextCircleCircleButton icon="favorite">
          like
        </IconUnderlyingTextCircleCircleButton>
      </div>
      <div className={styles.row}></div>
    </div>
  );
}
