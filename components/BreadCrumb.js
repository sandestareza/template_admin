import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from '@chakra-ui/react'

function BreadCrumb() {
  return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
  )
}

export default BreadCrumb