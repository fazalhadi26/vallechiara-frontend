import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmLabel = "Yes",
  cancelLabel = "Cancel",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
      <ModalContent borderRadius="20px" p={4}>
        <ModalHeader fontWeight="700" color="#2D3748">{title}</ModalHeader>
        <ModalCloseButton borderRadius="full" />
        <ModalBody>
          <Text color="gray.600" fontSize="lg">
            {message}
          </Text>
        </ModalBody>

        <ModalFooter gap={4} pb={6}>
          <Button 
            flex="1"
            variant="outline" 
            borderColor="#E2E8F0"
            bg="transparent"
            onClick={onClose} 
            borderRadius="full" 
            height="48px"
            fontWeight="600"
            _hover={{ bg: 'gray.50' }}
          >
            {cancelLabel}
          </Button>
          <Button
            flex="1"
            bg="#0f2b33"
            color="white"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            borderRadius="full"
            height="48px"
            fontWeight="600"
            _hover={{ bg: '#091c21', transform: 'translateY(-1px)' }}
            transition="all 0.2s"
          >
            {confirmLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
