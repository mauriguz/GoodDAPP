import React, { useCallback, useEffect } from 'react'

import illustration from '../../../../assets/CameraPermissionError.svg'
import ExplanationDialog from '../../../common/dialogs/ExplanationDialog'

import { useDialog } from '../../../../lib/undux/utils/dialog'

import { fireEvent, FV_CANTACCESSCAMERA } from '../../../../lib/analytics/analytics'

const CameraNotAllowedError = ({ onRetry }) => {
  const [showDialog] = useDialog()

  const onDismiss = useCallback(
    dismiss => {
      dismiss()
      onRetry()
    },
    [onRetry]
  )

  useEffect(() => {
    showDialog({
      content: (
        <ExplanationDialog
          errorMessage="We can’t access your camera..."
          title="Please enable camera permission"
          text="Change it via your device settings"
          imageSource={illustration}
        />
      ),
      type: 'error',
      isMinHeight: false,
      buttons: [
        {
          text: 'OK',
          onPress: onDismiss,
        },
      ],
    })

    fireEvent(FV_CANTACCESSCAMERA)
  }, [])

  return null
}

export default CameraNotAllowedError