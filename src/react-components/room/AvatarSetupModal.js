import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { BackButton } from "../input/BackButton";
import { AvatarSettingsContent } from "./AvatarSettingsContent";
import { FormattedMessage } from "react-intl";

export function AvatarSetupModal({ className, onBack, onSubmit, ...rest }) {

    // after 1 second, automatically click the submit button of this modal
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        console.log("Auto clicking Avatar setup submit button");
        onSubmit();
      }, 1500);
      return () => clearTimeout(timeout);
    }, []);

  return (
    <Modal
      title={<FormattedMessage id="avatar-setup-sidebar.title" defaultMessage="Avatar Setup" />}
      beforeTitle={<BackButton onClick={onBack} />}
      className={className}
    >
      <AvatarSettingsContent {...rest} />
    </Modal>
  );
}

AvatarSetupModal.propTypes = {
  className: PropTypes.string,
  onBack: PropTypes.func
};
