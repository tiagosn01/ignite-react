import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  numberPage: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, numberPage, onPageChange }: PaginationItemProps) {
  
  if(isCurrent) {
    return (
      <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default' 
      }}
    >
      {numberPage}
    </Button>
    )
  }

  return (
    <Button
    size="sm"
    fontSize="xs"
    width="4"
    bg="gray.700"
    _hover={{
      bg: 'gray.500'
    }}
    onClick={() => onPageChange(numberPage)}
  >
      {numberPage}
  </Button>
  )
}